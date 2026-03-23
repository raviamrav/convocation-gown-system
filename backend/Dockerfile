# Stage 1: build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy csproj files and restore
COPY ConvocationGown.Api/*.csproj ./ConvocationGown.Api/
COPY ../ConvocationGown.Core/*.csproj ./ConvocationGown.Core/
COPY ../ConvocationGown.Infrastructure/*.csproj ./ConvocationGown.Infrastructure/
RUN dotnet restore ConvocationGown.Api/ConvocationGown.Api.csproj

# Copy all source files
COPY . .

# Publish app
WORKDIR /src/ConvocationGown.Api
RUN dotnet publish -c Release -o /app/publish

# Stage 2: runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .
EXPOSE 5050
ENTRYPOINT ["dotnet", "ConvocationGown.Api.dll"]