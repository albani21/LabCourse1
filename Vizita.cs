namespace PrisonBackEndLab1
{
    public class Vizita
    {
        public int VizitaID { get; set; }

        public int BurgosuriID{ get; set; }
        public int VizitoriID { get; set; }

        public DateTime? Data { get; set; }

        public DateTime? KohaFillimit { get; set; }
        public DateTime? KohaMbarimit { get; set; }
    }
}
