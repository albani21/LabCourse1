using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PrisonBackEnd.Models
{
    public class Stafi
    {
        public int StafiID { get; set; }

        public int DrejtoriID { get; set; }

        public string Emri { get; set; }

        public string Mbiemri { get; set; }

        public string Qyteti { get; set; }

        public string Rruga { get; set; }

        public string Zipkodi { get; set; }

        public string DateLindja { get; set; }

        public string Gjinia { get; set; }
    }
}
