using ConvocationGown.Api.DTOs;

namespace ConvocationGown.Api.Interfaces
{
    public interface IAuthService
    {
        Task<LoginResponseDto> AuthenticateAsync(LoginRequestDto loginRequest);
        Task<RegisterAdminResponseDto> RegisterAdminAsync(RegisterAdminRequestDto registerAdminRequest);
    }
}
