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

# Copy published files from build stage
COPY --from=build /app/publish .

# # Copy wait-for-it script - used to wait for (local) DB to be ready before starting API
# COPY wait-for-it.sh ./
# RUN chmod +x wait-for-it.sh

# # Expose API port
# EXPOSE 5050

# # Use wait-for-it to wait for DB, then start API
# ENTRYPOINT ["./wait-for-it.sh", "db:5432", "--", "dotnet", "ConvocationGown.Api.dll"]

EXPOSE 5050

ENTRYPOINT ["dotnet", "ConvocationGown.Api.dll"]