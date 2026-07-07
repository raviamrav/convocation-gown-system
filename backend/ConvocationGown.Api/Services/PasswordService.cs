using Microsoft.AspNetCore.Identity;
using ConvocationGown.Api.Interfaces;
using ConvocationGown.Core.Entities;

namespace ConvocationGown.Api.Services
{
    public class PasswordService : IPasswordService
    {
        private readonly PasswordHasher<User> _passwordHasher;
        public PasswordService()
        {
            _passwordHasher = new PasswordHasher<User>();
        }

        public string HashPassword(string password)
        {
            //throw new NotImplementedException();
            //var passwordHasher = new PasswordHasher<User>();
            var user = new User(); // Create a dummy user instance
            return _passwordHasher.HashPassword(user, password);
        }

        public bool VerifyPassword(string password, string passwordHash)
        {
            //throw new NotImplementedException();
            //var passwordHasher = new PasswordHasher<User>();
            var user = new User(); // Create a dummy user instance
            var result = _passwordHasher.VerifyHashedPassword(user, passwordHash, password);
            return result == PasswordVerificationResult.Success;
        }
    }
}
