namespace ConvocationGown.Core.Entities
{

    public class Customer
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string PrimaryEmail { get; set; } = string.Empty;
        public string? SecondaryEmail { get; set; }
        public string PrimaryPhoneNumber { get; set; } = string.Empty;
        public string? SecondaryPhoneNumber { get; set; }
        public DateTime EventDateTime { get; set; }
        public string EventAddress { get; set; } = string.Empty;
        // Customer can have many orders - navigation
        public ICollection<Order>? Orders { get; set; }
    }
}
