namespace LabCourseBackEnd.Models
{
    public class Vizita
    {
        public int VizitaID { get; set; }
        public int BurgosuriID { get; set; }
        public int VizitoriID { get; set; }
        public DateTime? Data { get; set; }
        public TimeOnly KohaFillimit { get; set; }
        public TimeOnly KohaMbarimit { get; set; }

    }
}
