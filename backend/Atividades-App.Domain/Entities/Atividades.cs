using System;
using System.ComponentModel.DataAnnotations;

namespace Atividades_App.Domain.Entities;

public class Atividades
{
    [Key]
    public int Id { get; set; }
    public string? Titulo { get; set; }
    public string? Descricao { get; set; }
    public Prioridade Prioridade { get; set; }
}
