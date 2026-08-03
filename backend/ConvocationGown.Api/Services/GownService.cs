
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
        public Gown? GetById(int id)
        {
            return _context.Gowns.FirstOrDefault(g => g.Id == id);
        }
        public Gown Create(Gown gown) {
            _context.Gowns.Add(gown);
            _context.SaveChanges();
            return gown;
        }

        public Gown Update(Gown gown)
        {
            _context.Gowns.Update(gown);
            _context.SaveChanges();
            return gown;
        }

        public bool Delete(int id)
        {
            var gown = _context.Gowns.FirstOrDefault(g => g.Id == id);
            if (gown == null)
            {
                return false;
            }
            _context.Gowns.Remove(gown);
            _context.SaveChanges();
            return true;
        }

    }
}
