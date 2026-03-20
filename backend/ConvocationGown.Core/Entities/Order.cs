namespace ConvocationGown.Core.Entities;
public class Order
{
	public int Id { get; set; }
	public int CustomerId { get; set; }
	public DateTime OrderDate { get; set; }
	public DateTime DeliveryDate { get; set; }
	public decimal TotalAmount { get; set; }
	public string OrderStatus { get; set; } = string.Empty;

	public Customer? Customer { get; set; }
	public ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();

}
