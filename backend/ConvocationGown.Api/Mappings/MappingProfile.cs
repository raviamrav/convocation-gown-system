using AutoMapper;
using ConvocationGown.Core.Entities;
using ConvocationGown.Api.DTOs;

namespace ConvocationGown.Api.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile() {
            CreateMap<CreateGownDto, Gown>();

            CreateMap<CreateOrderDto, Order>();

            CreateMap<CreateOrderItemDto, OrderItem>();

            CreateMap<CreateOrderDto, Customer>()
                .ForMember(dest => dest.Name,
                    opt => opt.MapFrom(src => src.CustomerName))
                .ForMember(dest => dest.PrimaryEmail,
                    opt => opt.MapFrom(src => src.Email))
                .ForMember(dest => dest.PrimaryPhoneNumber,
                    opt => opt.MapFrom(src => src.Phone));
        }
    }
}
