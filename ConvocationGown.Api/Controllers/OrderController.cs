using Microsoft.AspNetCore.Mvc;
using ConvocationGown.Core.Entities;
using ConvocationGown.Infrastructure.Data;
using ConvocationGown.Api.DTOs;
using ConvocationGown.Api.Services;

namespace ConvocationGown.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : ControllerBase
    {
        //private readonly AppDbContext _context;

        //public OrderController(AppDbContext context)
        //{
        //    _context = context;
        //}

        private readonly OrderService _orderService;
        public OrderController(OrderService orderService) {
            _orderService = orderService;
        }

        [HttpPost]
        public IActionResult CreateOrder(CreateOrderDto dto)
        {
            var order = _orderService.CreateOrder(dto);

            // return Ok(new
            return Created($"api/orders/{order.Id}", new
            {
                OrderId = order.Id
            });
        }

        [HttpGet]
        public IActionResult GetOrders()
        {
            var orders = _orderService.GetOrders();
            return Ok(orders);
        }

        [HttpGet ("{id}")]
        public IActionResult GetOrderById(int id)
        {
            var order = _orderService.GetOrderById(id);
            if (order == null)
                return NotFound();

            return Ok(order);

        }

        /*
        [HttpPost]
        public IActionResult CreateOrder(CreateOrderDto dto)
        {
            // Create Customer
            var customer = new Customer
            {
                Name = dto.CustomerName,
                PrimaryEmail = dto.Email,
                PrimaryPhoneNumber = dto.Phone,
            };
            _context.Customers.Add(customer);
            _context.SaveChanges(); // CustomerId is generated here

            // create Order - Map Dto to Order entity
            var order = new Order
            {
                CustomerId = customer.Id, // FK to the newly created customer
                OrderDate = DateTime.UtcNow,
                DeliveryDate = dto.DeliveryDate,
                OrderStatus = "Enquiry", // Default
                OrderItems = dto.Items.Select(i => new OrderItem
                {
                    GownId = i.GownId,
                    Quantity = i.Quantity,
                }).ToList()
            };
            _context.Orders.Add(order);  // Add to DbContext
            _context.SaveChanges();      // Save to database

            //return Ok(Order);            // Return created order
            return Ok(new
            {
                OrderId = order.Id,
                CustomerId = customer.Id,
                CustomerName = dto.CustomerName,
                Item = order.OrderItems.Select(oi => new
                {
                    ItemOrderId = oi.Id,
                    GownId = oi.GownId,
                    Quantity = oi.Quantity,
                })
            });
        }
        */

    }
}
