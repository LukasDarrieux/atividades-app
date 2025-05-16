using System;
using Atividades_App.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Atividades_App.API.Context;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> option) : base(option)
    {
    }

    public DbSet<Atividades> Atividades { get; set; }
    public DbSet<Clientes> Clientes { get; set; }

}
