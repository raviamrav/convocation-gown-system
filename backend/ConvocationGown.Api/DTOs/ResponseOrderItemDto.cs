namespace ConvocationGown.Api.DTOs
{
    public class ResponseOrderItemDto
    {
        public string GownName { get; set; } = string.Empty;
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal TotalPrice { get; set; }
    }
}
