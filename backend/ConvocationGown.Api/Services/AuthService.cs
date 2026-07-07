using ConvocationGown.Infrastructure.Data;
using ConvocationGown.Api.Interfaces;
using ConvocationGown.Api.DTOs;
using Microsoft.EntityFrameworkCore;
using ConvocationGown.Core.Entities;

namespace ConvocationGown.Api.Services
{
    public class AuthService : IAuthService
    {
        private readonly AppDbContext _dbContext;
        private readonly IPasswordService _passwordService;
        private readonly IJwtService _jwtService;

        public AuthService(AppDbContext dbcontext, IPasswordService passwordService, IJwtService jwtService)
        {
            _dbContext = dbcontext;
            _passwordService = passwordService;
            _jwtService = jwtService;
        }

        public async Task<LoginResponseDto> AuthenticateAsync(LoginRequestDto loginRequest)
        {
            //throw new NotImplementedException();

            var user = await _dbContext.Users.FirstOrDefaultAsync(u => u.UserName == loginRequest.UserName);
            if (user == null)
            {
                // This consumes the missing 90ms so both paths take 100ms total
                //_passwordService.SimulateValidation(); -- can be handle later
                return new LoginResponseDto
                {
                    IsSuccess = false,
                    Message = "Invalid username or password."
                };
            }

            if (!_passwordService.VerifyPassword(loginRequest.Password, user.PasswordHash))
            {
                return new LoginResponseDto
                {
                    IsSuccess = false,
                    Message = "Invalid username or password."
                };
            }

            var token = _jwtService.GenerateToken(user);

            // Authentication successful
            return new LoginResponseDto
            {
                IsSuccess = true,
                Message = "Authentication successful.",
                Token = token
            };
        }

        public async Task<RegisterAdminResponseDto> RegisterAdminAsync(RegisterAdminRequestDto registerAdminRequest)
        {
            //throw new NotImplementedException();
            var existingUser = await _dbContext.Users.FirstOrDefaultAsync(u => u.UserName == registerAdminRequest.UserName);
            if (existingUser != null)
            {
                return new RegisterAdminResponseDto
                {
                    IsSuccess = false,
                    Message = "Username already exists."
                };
            }
            var newUser = new User
            {
                UserName = registerAdminRequest.UserName,
                PasswordHash = _passwordService.HashPassword(registerAdminRequest.Password),
                Role = UserRole.Admin,
                CreatedAt = DateTime.UtcNow
            };
            _dbContext.Users.Add(newUser);
            await _dbContext.SaveChangesAsync();
            return new RegisterAdminResponseDto
            {
                IsSuccess = true,
                Message = "Admin user registered successfully."
            };
        }
    }
}
