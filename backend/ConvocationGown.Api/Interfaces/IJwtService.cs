using ConvocationGown.Core.Entities;

namespace ConvocationGown.Api.Interfaces
{
    public interface IJwtService
    {
        string GenerateToken(User user);
    }
}
