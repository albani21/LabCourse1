using System.ComponentModel.DataAnnotations;

namespace LabCourseBackEnd.Models
{
    public class Sektori
    {
        [Key]
        public int SektoriID { get; set; } 
        public string EmriSektorit { get; set; }
    }
}
