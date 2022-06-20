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
    public class StaffisController : ControllerBase
    {
        private readonly PrisonBackEndLabi1Context _context;

        public StaffisController(PrisonBackEndLabi1Context context)
        {
            _context = context;
        }

        // GET: api/Staffis
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Staffi>>> GetStaffi()
        {
          if (_context.Staffi == null)
          {
              return NotFound();
          }
            return await _context.Staffi.ToListAsync();
        }

        // GET: api/Staffis/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Staffi>> GetStaffi(int id)
        {
          if (_context.Staffi == null)
          {
              return NotFound();
          }
            var staffi = await _context.Staffi.FindAsync(id);

            if (staffi == null)
            {
                return NotFound();
            }

            return staffi;
        }

        // PUT: api/Staffis/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStaffi(int id, Staffi staffi)
        {
            if (id != staffi.StafiID)
            {
                return BadRequest();
            }

            _context.Entry(staffi).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StaffiExists(id))
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

        // POST: api/Staffis
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Staffi>> PostStaffi(Staffi staffi)
        {
          if (_context.Staffi == null)
          {
              return Problem("Entity set 'PrisonBackEndLabi1Context.Staffi'  is null.");
          }
            _context.Staffi.Add(staffi);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStaffi", new { id = staffi.StafiID }, staffi);
        }

        // DELETE: api/Staffis/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStaffi(int id)
        {
            if (_context.Staffi == null)
            {
                return NotFound();
            }
            var staffi = await _context.Staffi.FindAsync(id);
            if (staffi == null)
            {
                return NotFound();
            }

            _context.Staffi.Remove(staffi);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StaffiExists(int id)
        {
            return (_context.Staffi?.Any(e => e.StafiID == id)).GetValueOrDefault();
        }
    }
}
