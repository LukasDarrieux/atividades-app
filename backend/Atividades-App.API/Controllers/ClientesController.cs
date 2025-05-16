using Atividades_App.API.Context;
using Atividades_App.Domain.DTO;
using Atividades_App.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Atividades_App.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ClientesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Clientes>> Get()
        {
            return await _context.Clientes.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Clientes>> GetById(int id)
        {
            if (id == ushort.MinValue) return BadRequest();

            var cliente = await GetCliente(id);
            if (cliente is null) return NoContent();

            return Ok(cliente);
        }

        [HttpPost]
        public async Task<ActionResult> Post(ClientesDTO clienteDTO)
        {
            if (!ModelState.IsValid) return BadRequest();

            var cliente = new Clientes()
            {
                Nome = clienteDTO.Nome,
                Contato = clienteDTO.Contato,
                Responsavel = clienteDTO.Responsavel,
                Situacao = clienteDTO.Situacao
            };

            _context.Clientes.Add(cliente);
            await _context.SaveChangesAsync();

            return Ok(cliente);

        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Clientes>> Put(int id, ClientesDTO clienteDTO)
        {
            if (!ModelState.IsValid) return BadRequest();

            var cliente = await GetCliente(id);

            if (cliente is null) return NoContent();

            cliente.Nome = clienteDTO.Nome;
            cliente.Contato = clienteDTO.Contato;
            cliente.Responsavel = clienteDTO.Responsavel;
            cliente.Situacao = clienteDTO.Situacao;
            

            _context.Clientes.Update(cliente);
            await _context.SaveChangesAsync();

            return Ok(cliente);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var cliente = await GetCliente(id);

            if (cliente is null) return NoContent();

            _context.Clientes.Remove(cliente);
            await _context.SaveChangesAsync(); 

            return Ok($"Cliente excluído {id} - {cliente.Nome} com sucesso");
        }

        private async Task<Clientes?> GetCliente(int id)
        {
            return await _context.Clientes.FindAsync(id);
        }
    }
}
