using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PrisonBackEndLab1;
using PrisonBackEndLabi1.Data;

namespace PrisonBackEndLabi1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VizitaController : ControllerBase
    {
        private readonly PrisonBackEndLabi1Context _context;

        public VizitaController(PrisonBackEndLabi1Context context)
        {
            _context = context;
        }

        // GET: api/Vizita
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vizita>>> GetVizita()
        {
          if (_context.Vizita == null)
          {
              return NotFound();
          }
            return await _context.Vizita.ToListAsync();
        }

        // GET: api/Vizita/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Vizita>> GetVizita(int id)
        {
          if (_context.Vizita == null)
          {
              return NotFound();
          }
            var vizita = await _context.Vizita.FindAsync(id);

            if (vizita == null)
            {
                return NotFound();
            }

            return vizita;
        }

        // PUT: api/Vizita/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVizita(int id, Vizita vizita)
        {
            if (id != vizita.VizitaID)
            {
                return BadRequest();
            }

            _context.Entry(vizita).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VizitaExists(id))
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

        // POST: api/Vizita
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Vizita>> PostVizita(Vizita vizita)
        {
          if (_context.Vizita == null)
          {
              return Problem("Entity set 'PrisonBackEndLabi1Context.Vizita'  is null.");
          }
            _context.Vizita.Add(vizita);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVizita", new { id = vizita.VizitaID }, vizita);
        }

        // DELETE: api/Vizita/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVizita(int id)
        {
            if (_context.Vizita == null)
            {
                return NotFound();
            }
            var vizita = await _context.Vizita.FindAsync(id);
            if (vizita == null)
            {
                return NotFound();
            }

            _context.Vizita.Remove(vizita);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VizitaExists(int id)
        {
            return (_context.Vizita?.Any(e => e.VizitaID == id)).GetValueOrDefault();
        }
    }
}
