using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PrisonBackEndLabi1;
using PrisonBackEndLabi1.Data;

namespace PrisonBackEndLabi1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InfiermeriasController : ControllerBase
    {
        private readonly PrisonBackEndLabi1Context _context;

        public InfiermeriasController(PrisonBackEndLabi1Context context)
        {
            _context = context;
        }

        // GET: api/Infiermerias
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Infiermeria>>> GetInfiermerias()
        {
          if (_context.Infiermerias == null)
          {
              return NotFound();
          }
            return await _context.Infiermerias.ToListAsync();
        }

        // GET: api/Infiermerias/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Infiermeria>> GetInfiermeria(int id)
        {
          if (_context.Infiermerias == null)
          {
              return NotFound();
          }
            var infiermeria = await _context.Infiermerias.FindAsync(id);

            if (infiermeria == null)
            {
                return NotFound();
            }

            return infiermeria;
        }

        // PUT: api/Infiermerias/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInfiermeria(int id, Infiermeria infiermeria)
        {
            if (id != infiermeria.InfiermeriaID)
            {
                return BadRequest();
            }

            _context.Entry(infiermeria).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InfiermeriaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Infiermerias
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Infiermeria>> PostInfiermeria(Infiermeria infiermeria)
        {
          if (_context.Infiermerias == null)
          {
              return Problem("Entity set 'PrisonBackEndLabi1Context.Infiermerias'  is null.");
          }
            _context.Infiermerias.Add(infiermeria);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInfiermeria", new { id = infiermeria.InfiermeriaID }, infiermeria);
        }

        // DELETE: api/Infiermerias/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInfiermeria(int id)
        {
            if (_context.Infiermerias == null)
            {
                return NotFound();
            }
            var infiermeria = await _context.Infiermerias.FindAsync(id);
            if (infiermeria == null)
            {
                return NotFound();
            }

            _context.Infiermerias.Remove(infiermeria);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InfiermeriaExists(int id)
        {
            return (_context.Infiermerias?.Any(e => e.InfiermeriaID == id)).GetValueOrDefault();
        }
    }
}
