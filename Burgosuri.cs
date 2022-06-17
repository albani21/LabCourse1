namespace LabCourseBackEnd.Models
{
    public class Burgosuri
    {
        public int BurgosuriID { get; set; }
        public string? Emri { get; set; }
        public string? Mbiemri { get; set; }
        public string? Qyteti { get; set; }
        public string? Rruga { get; set; }
        public string? ZipKodi { get; set; }
        public string? NrShtepise { get; set; }
        public DateTime? DataHyrjes { get; set; }
        public DateTime? DataDaljes { get; set; }
        public DateTime? DateLindja { get; set; }
        public int QeliaID { get; set; }
        public char? Gjinia { get; set; }

    }
}
