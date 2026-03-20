namespace ConvocationGown.Core.Entities
{
    public class Gown
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Size { get; set; } = string.Empty;
        public string Color { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public decimal CautionDeposit { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        // Orderitem can have multiple gown (types) id
        public ICollection<OrderItem>? OrderItems { get; set; }
    }
}