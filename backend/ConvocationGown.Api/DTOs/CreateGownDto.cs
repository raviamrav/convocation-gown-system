using System.ComponentModel.DataAnnotations;

namespace ConvocationGown.Api.DTOs
{
    public class CreateGownDto
    {
        [StringLength (100)]
        public string Name { get; set; } = string.Empty;
        [StringLength (100)]
        public string Description { get; set; } = string.Empty;
        
        [StringLength(100)] 
        public string Size { get; set; } = string.Empty;
        [StringLength(100)] 
        public string Color { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public decimal CautionDeposit { get; set; }
    }
}
