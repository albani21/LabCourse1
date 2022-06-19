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
    public class VizitoriController : ControllerBase
    {
        private readonly PrisonBackEndLabi1Context _context;

        public VizitoriController(PrisonBackEndLabi1Context context)
        {
            _context = context;
        }

        // GET: api/Vizitori
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vizitori>>> GetVizitori()
        {
          if (_context.Vizitori == null)
          {
              return NotFound();
          }
            return await _context.Vizitori.ToListAsync();
        }

        // GET: api/Vizitori/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Vizitori>> GetVizitori(int id)
        {
          if (_context.Vizitori == null)
          {
              return NotFound();
          }
            var vizitori = await _context.Vizitori.FindAsync(id);

            if (vizitori == null)
            {
                return NotFound();
            }

            return vizitori;
        }

        // PUT: api/Vizitori/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVizitori(int id, Vizitori vizitori)
        {
            if (id != vizitori.VizitoriID)
            {
                return BadRequest();
            }

            _context.Entry(vizitori).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VizitoriExists(id))
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

        // POST: api/Vizitori
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Vizitori>> PostVizitori(Vizitori vizitori)
        {
          if (_context.Vizitori == null)
          {
              return Problem("Entity set 'PrisonBackEndLabi1Context.Vizitori'  is null.");
          }
            _context.Vizitori.Add(vizitori);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVizitori", new { id = vizitori.VizitoriID }, vizitori);
        }

        // DELETE: api/Vizitori/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVizitori(int id)
        {
            if (_context.Vizitori == null)
            {
                return NotFound();
            }
            var vizitori = await _context.Vizitori.FindAsync(id);
            if (vizitori == null)
            {
                return NotFound();
            }

            _context.Vizitori.Remove(vizitori);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VizitoriExists(int id)
        {
            return (_context.Vizitori?.Any(e => e.VizitoriID == id)).GetValueOrDefault();
        }
    }
}
