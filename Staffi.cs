using System.ComponentModel.DataAnnotations;

namespace PrisonBackEndLabi1
{
    public class Staffi
    {
        [Key]
        public int StafiID { get; set; }

        public int DrejtoriID { get; set; }

        public string? Emri { get; set; }

        public string? Mbiemri { get; set; }

        public string? Qyteti { get; set; }

        public string? Rruga { get; set; }

        public int Zipkodi { get; set; }

        public DateTime? DateLindja { get; set; }

        public string? Gjinia { get; set; }
    }
}
