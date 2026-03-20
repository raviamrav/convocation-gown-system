using ConvocationGown.Api.DTOs;
using System.ComponentModel.DataAnnotations;
using System.Runtime.CompilerServices;

namespace ConvocationGown.Api.DTOs
{
    public class CreateOrderDto
    {
        [Required]
        [StringLength (100)]
        public string CustomerName { get; set; } = null!;

        [Required]
        [EmailAddress]
        public string Email { get; set; } = null!;

        [Required]
        [Phone]
        public string Phone {  get; set; } = null!;

        [Required]
        public DateTime DeliveryDate { get; set; }

        [MinLength(1)]
        public List<CreateOrderItemDto> Items { get; set; } = new();

    }
}
