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
    public class PushimiController : ControllerBase
    {
        private readonly PrisonBackEndLabi1Context _context;

        public PushimiController(PrisonBackEndLabi1Context context)
        {
            _context = context;
        }

        // GET: api/Pushimi
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pushimi>>> GetPushimi()
        {
          if (_context.Pushimi == null)
          {
              return NotFound();
          }
            return await _context.Pushimi.ToListAsync();
        }

        // GET: api/Pushimi/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Pushimi>> GetPushimi(int id)
        {
          if (_context.Pushimi == null)
          {
              return NotFound();
          }
            var pushimi = await _context.Pushimi.FindAsync(id);

            if (pushimi == null)
            {
                return NotFound();
            }

            return pushimi;
        }

        // PUT: api/Pushimi/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPushimi(int id, Pushimi pushimi)
        {
            if (id != pushimi.PushimiID)
            {
                return BadRequest();
            }

            _context.Entry(pushimi).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PushimiExists(id))
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

        // POST: api/Pushimi
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Pushimi>> PostPushimi(Pushimi pushimi)
        {
          if (_context.Pushimi == null)
          {
              return Problem("Entity set 'PrisonBackEndLabi1Context.Pushimi'  is null.");
          }
            _context.Pushimi.Add(pushimi);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPushimi", new { id = pushimi.PushimiID }, pushimi);
        }

        // DELETE: api/Pushimi/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePushimi(int id)
        {
            if (_context.Pushimi == null)
            {
                return NotFound();
            }
            var pushimi = await _context.Pushimi.FindAsync(id);
            if (pushimi == null)
            {
                return NotFound();
            }

            _context.Pushimi.Remove(pushimi);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PushimiExists(int id)
        {
            return (_context.Pushimi?.Any(e => e.PushimiID == id)).GetValueOrDefault();
        }
    }
}
