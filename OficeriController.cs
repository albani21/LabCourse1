using LabCourseBackEnd.Data;
using LabCourseBackEnd.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LabCourseBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OficeriController : ControllerBase
    {
        private readonly DataContext _context;

        public OficeriController(DataContext context)
        {
            _context = context;
        }


        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Oficeri>>> GetOficeri()
        {
            return Ok(await _context.Oficeri.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Oficeri>> GetOficeri(int id)
        {
            var oficeri = await _context.Oficeri.FindAsync(id);

            if (oficeri == null)
            {
                return NotFound();
            }

            return oficeri;
        }

        [HttpPost]
        public async Task<ActionResult<Oficeri>> PostOficeri(Oficeri oficeri)
        {
            _context.Oficeri.Add(oficeri);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOficeri", new { id = oficeri.OficeriID }, oficeri);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutOficeri(int id, Oficeri oficeri)
        {
            if (id != oficeri.OficeriID)
            {
                return BadRequest();
            }

            _context.Entry(oficeri).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OficeriExists(id))
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


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOficeri(int id)
        {
            var oficeri = await _context.Oficeri.FindAsync(id);
            if (oficeri == null)
            {
                return NotFound();
            }

            _context.Oficeri.Remove(oficeri);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OficeriExists(int id)
        {
            return _context.Oficeri.Any(e => e.OficeriID == id);
        }
    }
}

