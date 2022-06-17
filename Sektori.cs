using System.ComponentModel.DataAnnotations;

namespace LabCourseBackEnd.Models
{
    public class Sektori
    {
        [Key]
        public int SektoriID { get; set; } 
        public string? SektoriName { get; set; }
    }
}
