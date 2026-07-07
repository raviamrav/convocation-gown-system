using ConvocationGown.Api.Services;

namespace ConvocationGown.Api.Interfaces
{
    public interface IPasswordService
    {
        string HashPassword(string password);
        bool VerifyPassword(string password, string passwordHash);
    }
}
