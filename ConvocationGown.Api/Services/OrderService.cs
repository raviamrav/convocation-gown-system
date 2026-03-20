using ConvocationGown.Api.DTOs;
using ConvocationGown.Core.Entities;
using ConvocationGown.Infrastructure.Data;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace ConvocationGown.Api.Services
{
    public class OrderService
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;
        public OrderService(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Order CreateOrder(CreateOrderDto dto)
        {
            //var customer = new Customer
            //{
            //    Name = dto.CustomerName,
            //    PrimaryEmail = dto.Email,
            //    PrimaryPhoneNumber = dto.Phone
            //};

            //_context.Customers.Add(customer);
            //_context.SaveChanges();

            //var order = new Order
            //{
            //    CustomerId = customer.Id,
            //    OrderDate = DateTime.UtcNow,
            //    DeliveryDate = dto.DeliveryDate,
            //    OrderStatus = "Enquiry",
            //    OrderItems = dto.Items.Select(i => new OrderItem
            //    {
            //        GownId = i.GownId,
            //        Quantity = i.Quantity,
            //    }).ToList()
            //};

            var order = _mapper.Map<Order>(dto);
            var customer = _mapper.Map<Customer>(dto);

            order.Customer = customer;
            order.OrderItems = _mapper.Map<List<OrderItem>>(dto.Items);

            order.OrderDate = DateTime.UtcNow;
            order.OrderStatus = "Pending";

            //fetch all gowns at once
            var gownIds = order.OrderItems.Select(i => i.GownId).ToList();

            var gowns = _context.Gowns
                .Where(g => gownIds.Contains(g.Id))
                .ToList();

            //Calculate unite price and total for each item
            foreach (var item in order.OrderItems ?? new List<OrderItem>())
            {
                //foreach (var item in order.OrderItems!) {
                //var gown = _context.Gowns.Find(item.GownId)
                var gown = gowns.FirstOrDefault(g => g.Id == item.GownId)
                    ?? throw new Exception($"Gown {item.GownId} not found");

                item.UnitPrice = gown.Price;
                item.TotalPrice = item.UnitPrice * item.Quantity;
            }

            order.TotalAmount = order.OrderItems!.Sum(i => i.TotalPrice);

            _context.Orders.Add(order);
            _context.SaveChanges();

            return order;
        }

        //public List<Order> GetOrders()
        //{
        //    return _context.Orders
        //        .Include(o => o.Customer)
        //        .Include(o => o.OrderItems)
        //            .ThenInclude(i => i.Gown)
        //        .AsNoTracking()
        //        .ToList();
        //}

        public List<ResponseOrderDto> GetOrders()
        {
            var orders = _context.Orders
                .Include(o => o.Customer)
                .Include(o => o.OrderItems)
                    .ThenInclude(i => i.Gown)
                .ToList();

            var result = orders.Select(order => new ResponseOrderDto
            {
                Id = order.Id,
                CustomerName = order.Customer!.Name,
                DeliveryDate = order.DeliveryDate,
                TotalAmount = order.TotalAmount,
                OrderStatus = order.OrderStatus,

                Items = order.OrderItems!.Select(item => new ResponseOrderItemDto
                {
                    GownName = item.Gown!.Name,
                    Quantity = item.Quantity,
                    UnitPrice = item.UnitPrice,
                    TotalPrice = item.TotalPrice,
                }).ToList()

            }).ToList();

            return result;
        }

        public ResponseOrderDto? GetOrderById(int id)
        {
            var order = _context.Orders
                .Include(o => o.Customer)
                .Include(o => o.OrderItems)
                    .ThenInclude(i => i.Gown)
                .FirstOrDefault(o => o.Id == id);

            if (order == null)
                return null;

            var result = new ResponseOrderDto
            {
                Id = order.Id,
                CustomerName = order.Customer!.Name,
                DeliveryDate = order.DeliveryDate,
                TotalAmount = order.TotalAmount,
                OrderStatus = order.OrderStatus,

                Items = order.OrderItems!.Select(item => new ResponseOrderItemDto
                {
                    GownName = item.Gown!.Name,
                    Quantity = item.Quantity,
                    UnitPrice = item.UnitPrice,
                    TotalPrice = item.TotalPrice
                }).ToList()
            };

            return result;
        }
    }
}
