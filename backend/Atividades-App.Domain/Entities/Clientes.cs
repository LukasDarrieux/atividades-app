using System;

namespace Atividades_App.Domain.Entities;

public class Clientes
{
    public int Id { get; set; }
    public string? Nome { get; set; }
    public string? Responsavel { get; set; }
    public string? Contato { get; set; }
    public Situacao Situacao { get; set; }
    
}
