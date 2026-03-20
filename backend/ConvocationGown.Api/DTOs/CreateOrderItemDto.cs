using System.ComponentModel.DataAnnotations;

namespace ConvocationGown.Api.DTOs
{
    public class CreateOrderItemDto
    {
        public int GownId { get; set; }
        [Range (1,1000)]
        public int Quantity { get; set; }
    }
}
