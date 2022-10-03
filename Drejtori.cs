using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LabCourseBackEnd.Models
{
	public class Drejtori
	{
		public int DrejtoriID { get; set; }

		public int SektoriID { get; set; }
		public string? Emri { get; set; }
		public string? Mbiemri { get; set; }
		public string? Qyteti { get; set; }
		public string? Rruga { get; set; }
		public string? ZipKodi { get; set; }
        
		public DateTime? DateLindja { get; set; }
		public char Gjinia { get; set; }


	}
}
