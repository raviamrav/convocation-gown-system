using System.ComponentModel.DataAnnotations;

namespace ConvocationGown.Core.Entities
{
    public class OrderItem
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public int GownId { get; set; }
        [Range (0, 1000)]
        public int Quantity { get; set; }

        public decimal UnitPrice { get; set; } = decimal.Zero;
        public decimal TotalPrice {  get; set; } = decimal.Zero;

        public Gown? Gown { get; set; }
        public Order? Order { get; set; }
    }
}