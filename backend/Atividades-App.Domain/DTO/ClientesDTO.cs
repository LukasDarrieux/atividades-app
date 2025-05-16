using System;
using Atividades_App.Domain.Entities;

namespace Atividades_App.Domain.DTO;

public class ClientesDTO
{
    public string? Nome { get; set; }
    public string? Responsavel { get; set; }
    public string? Contato { get; set; }
    public Situacao Situacao { get; set; }
    
}
