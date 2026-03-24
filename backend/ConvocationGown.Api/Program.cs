using Microsoft.EntityFrameworkCore;
using ConvocationGown.Infrastructure.Data;
using ConvocationGown.Api.Services;
using System.Text.Json.Serialization;
using DotNetEnv;
using Npgsql;

var builder = WebApplication.CreateBuilder(args);

// Load environment variables
//Env.Load("../../.env.production");
Env.Load();

var dbHost = Environment.GetEnvironmentVariable("DB_HOST") ?? "localhost";
var dbName = Environment.GetEnvironmentVariable("DB_NAME") ?? "gown_db";
var dbUser = Environment.GetEnvironmentVariable("DB_USER") ?? "postgres";
var dbPassword = Environment.GetEnvironmentVariable("DB_PASSWORD") ?? "secret";
var dbPort = int.TryParse(Environment.GetEnvironmentVariable("DB_PORT"), out var port) ? port : 5432;

var sslMode = Environment.GetEnvironmentVariable("DB_SSLMODE")?.ToLower() == "require"
              ? SslMode.Require
              : SslMode.Disable;
// Build connection string (SSL required for Neon)
var npgsqlBuilder = new NpgsqlConnectionStringBuilder
{
    Host = dbHost,
    Database = dbName,
    Username = dbUser,
    Password = dbPassword,
    Port = dbPort,
    SslMode = sslMode // SSL enforced
};

var connectionString = npgsqlBuilder.ConnectionString;

// Configure services
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(connectionString)
);

builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
    });

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<OrderService>();
builder.Services.AddScoped<GownService>();
builder.Services.AddAutoMapper(typeof(Program));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact", policy =>
    {
        policy.WithOrigins("http://localhost:5173", "http://localhost:5174")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Listen on all interfaces (Docker-friendly)
app.Urls.Add("http://0.0.0.0:5050");

app.UseSwagger();
app.UseSwaggerUI();
app.UseHttpsRedirection();
app.UseCors("AllowReact");
app.MapControllers();

// Apply migrations
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.Migrate();
}

app.Run();