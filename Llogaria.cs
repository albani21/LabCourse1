using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LabCourseBackEnd.Models
{

    public class Llogaria
    {
        [Key]
        public int OficeriID { get; set; }
        public string? username { get; set; }
        public string? passwordi { get; set; }
    }
}