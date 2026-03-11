namespace ConvocationGown.Api.DTOs
{
    public class OrderItemDto
    {
        public int Id { get; set; }
        public string? GownName { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }        
        public decimal TotalPrice { get; set; }
    }
}
