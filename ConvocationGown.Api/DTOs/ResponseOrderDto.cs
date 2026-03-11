namespace ConvocationGown.Api.DTOs
{
    public class ResponseOrderDto
    {
        public int Id { get; set; }
        public string CustomerName { get; set; } = string.Empty;
        public DateTime DeliveryDate { get; set; }
        public decimal TotalAmount { get; set; }
        public string OrderStatus { get; set; } = string.Empty;
        public List<ResponseOrderItemDto> Items { get; set; } = new();
    }
}
