using System;
using Atividades_App.Domain.Entities;

namespace Atividades_App.Domain.DTO;

public class AtividadesDTO
{
    public string? Titulo { get; set; }
    public string? Descricao { get; set; }
    public Prioridade Prioridade { get; set; }
}
