using System.ComponentModel.DataAnnotations;

namespace ConvocationGown.Api.DTOs
{
    public class CreateCustomerDto
    {
        [Required]
        [StringLength(100)]
        public string Name { get; set; } = string.Empty;
        [Required]
        [EmailAddress]
        public string PrimaryEmail { get; set; } = string.Empty;
        [EmailAddress]
        public string? SecondaryEmail { get; set; }
        [Required]
        [Phone]
        public string PrimaryPhoneNumber { get; set; } = string.Empty;
        public string? SecondaryPhoneNumber { get; set; }
        public DateTime EventDateTime { get; set; }
        public string EventAddress { get; set; } = String.Empty;

    }
}
