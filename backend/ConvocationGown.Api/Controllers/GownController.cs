using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using ConvocationGown.Core.Entities;
using ConvocationGown.Api.DTOs;
using ConvocationGown.Api.Services;
using ConvocationGown.Infrastructure.Data;
using AutoMapper;

namespace ConvocationGown.Api.Controllers
{
    [ApiController] //Enables automatic API behavior (validation, binding)
    [Route("api/[Controller]")] // url api/gown
    public class GownController : ControllerBase
    {
        // Allows controller to access the database called Dependency Injection
        //private readonly AppDbContext _context; // A private field to hold the instance

        private readonly GownService _gownService;
        // When a user hits an API route, .NET automatically looks at this constructor.
        // It sees you need 'AppDbContext', creates one using the "recipe" from Program.cs,
        // and "injects" it here.
        //public GownController(AppDbContext context)
        //{
        //    _context = context;
        //}

        //public GownController(GownService gownService) { 
        //    _gownService = gownService;
        //}

        private readonly IMapper _mapper;
        public GownController(GownService gownService, IMapper mapper)
        {
            _gownService = gownService;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            // Now you use the injected instance to talk to PostgreSQL
            //var gowns = _context.Gowns.ToList();
            var gowns = _gownService.GetAll();
            return Ok(gowns);
        }

        [HttpPost]
        public IActionResult Create(CreateGownDto dto)
        {

            var gown = _mapper.Map<Gown>(dto);

            gown.CreatedDate = DateTime.UtcNow;
            gown.UpdatedDate = DateTime.UtcNow;

            //var gown = new Gown
            //{
            //    Name        = dto.Name,
            //    Description = dto.Description,
            //    Color       = dto.Color,
            //    Size        = dto.Size,
            //    Price       = dto.Price,
            //    CautionDeposit = dto.CautionDeposit,
            //    CreatedDate = DateTime.UtcNow,
            //    UpdatedDate = DateTime.UtcNow,
            //};

            //_context.Gowns.Add(gown);
            //_context.SaveChanges();
            var result = _gownService.Create(gown);
            return Ok(gown);
        }


    }
}
