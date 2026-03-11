
using Microsoft.AspNetCore.Mvc;
using ConvocationGown.Infrastructure.Data;
using ConvocationGown.Core.Entities;

namespace ConvocationGown.Api.Services
{
    public class GownService
    {
        private readonly AppDbContext _context;

        public GownService(AppDbContext context)
        {
            _context = context;
        }

        public List<Gown> GetAll()
        {
            return _context.Gowns.ToList();
        }

        public Gown Create(Gown grown) {
            _context.Gowns.Add(grown);
            _context.SaveChanges();
            return grown;
        }
    }
}
