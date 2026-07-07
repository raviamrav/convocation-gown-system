namespace ConvocationGown.Core.Entities
{
    public enum UserRole
    {
        Admin = 1,
        Staff = 2,
        User  = 3
    }
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;
        public UserRole Role { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
