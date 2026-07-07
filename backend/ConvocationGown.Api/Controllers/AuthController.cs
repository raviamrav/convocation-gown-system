using Microsoft.AspNetCore.Mvc;
using ConvocationGown.Api.Interfaces;
using ConvocationGown.Api.DTOs;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace ConvocationGown.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        public async Task<ActionResult<LoginResponseDto>> Login(LoginRequestDto loginRequest)
        {
            var response = await _authService.AuthenticateAsync(loginRequest);
            if (!response.IsSuccess)
            {
                return Unauthorized(response);
            }
            //if (response == null)
            //{
            //    return Unauthorized(new { message = "Invalid username or password" });
            //}
            return Ok(response);
        }

        [HttpPost("register-admin")]
        public async Task<ActionResult<RegisterAdminResponseDto>> RegisterAdmin(RegisterAdminRequestDto registerAdminRequest)
        {
            var response = await _authService.RegisterAdminAsync(registerAdminRequest);
            if (!response.IsSuccess)
            {
                return BadRequest(response);
            }
            return Ok(response);
        }

        //[Authorize(Roles = "Admin")]
        //[HttpGet("admin-test")]
        //public IActionResult AdminTest()
        //{
        //    var userName = User.Identity?.Name;
        //    //return Ok($"Hello {userName}, You are authorized to access this endpoint as an Admin.");
        //    return Ok(new
        //    {
        //        Message = "You are authorized to access this endpoint as an Admin.",
        //        Username = userName,
        //    });
        //}

        [Authorize]
        [HttpGet("me")]
        public IActionResult GetCurrentUser()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var userName = User.Identity?.Name;
            var roles = User.Claims
                            .Where(c => c.Type == ClaimTypes.Role)
                            .Select(c => c.Value).ToList()
                            .ToList();
            return Ok(new
            {
                Id = userId,
                Username = userName,
                Roles = roles
            });
        }
    }
}
