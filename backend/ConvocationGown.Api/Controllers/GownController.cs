using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using ConvocationGown.Core.Entities;
using ConvocationGown.Api.DTOs;
using ConvocationGown.Api.Services;
using ConvocationGown.Infrastructure.Data;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;

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

        //For learning & testing purposes, to verify that the [Authorize] attribute is working correctly.
        //[Authorize]
        //[HttpGet("secure-test")]
        //public IActionResult SecureTest()
        //{
        //    return Ok("You are authorized to access this endpoint.");
        //}

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public IActionResult Create(CreateGownDto dto)
        {

            var gown = _mapper.Map<Gown>(dto);

            gown.CreatedDate = DateTime.UtcNow;
            gown.UpdatedDate = DateTime.UtcNow;

            var result = _gownService.Create(gown);

            return Ok(gown);
        }
    }
}
