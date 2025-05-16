using Atividades_App.API.Context;
using Atividades_App.Domain.DTO;
using Atividades_App.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Atividades_App.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AtividadesController : ControllerBase
    {
        public readonly AppDbContext _context;
        public AtividadesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Atividades>>> Get()
        {
            return await _context.Atividades.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Atividades>> GetById(int id)
        {
            var atividade = await GetAtividade(id);
            if (atividade is null) return NoContent();
            return Ok(atividade);
        }

        [HttpPost]
        public async Task<ActionResult> Post(AtividadesDTO atividadeDTO)
        {
            if (!ModelState.IsValid) return BadRequest();
            
            var atividade = new Atividades()
            {
                Titulo = atividadeDTO.Titulo,
                Descricao = atividadeDTO.Descricao,
                Prioridade = atividadeDTO.Prioridade
            };

            _context.Atividades.Add(atividade);
            await _context.SaveChangesAsync();

            return Ok(atividade);    
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Atividades>> Put(int id, AtividadesDTO atividadeDTO)
        {
            if (!ModelState.IsValid) return BadRequest();
            
            var atividade = await GetAtividade(id);

            if (atividade is null) return NoContent();

            atividade.Titulo = atividadeDTO.Titulo;
            atividade.Descricao = atividadeDTO.Descricao;
            atividade.Prioridade = atividadeDTO.Prioridade;
        
            _context.Atividades.Update(atividade);
            await _context.SaveChangesAsync();

            return Ok(atividade);
        
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            if (id <= ushort.MinValue) return BadRequest("Id tem que ser maior que 0");

            var atividade = await GetAtividade(id);

            if (atividade is null) return NoContent();

            _context.Atividades.Remove(atividade);
            await _context.SaveChangesAsync();

            return Ok($"Atividade {id} excluída");
            
        }

        private async Task<Atividades?> GetAtividade(int id)
        {
            return await _context.Atividades.FindAsync(id);
        }
    }
}
