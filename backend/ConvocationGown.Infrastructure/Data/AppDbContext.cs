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
        public DbSet<User> Users { get; set; }
        // 3. This method configures the model (like relationships, constraints)


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // Configure relationships, constraints, etc. here if needed
            // For example, if you want to set up a relationship between Order and Customer:
            modelBuilder.Entity<User>()
                .HasIndex(u => u.UserName)
                .IsUnique(); // Ensure UserName is unique
        }
    }
}