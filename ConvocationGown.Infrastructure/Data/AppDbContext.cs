using ConvocationGown.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace ConvocationGown.Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        // 1. The constructor receives settings (like PostgreSQL) from Program.cs
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // Customer class  →  Customers table
        // 2. These properties map your C# classes to Database Tables
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Gown> Gowns { get; set; }
        // Create table → Orders
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
    }
}