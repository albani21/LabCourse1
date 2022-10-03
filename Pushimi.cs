namespace LabCourseBackEnd.Models
{
    public class Pushimi
    {
        public int PushimiID { get; set; }
        public int QeliaID { get; set; }
        public DayOfWeek? Dita { get; set; }
        public DateTime? Data { get; set; }
        public string? Orari { get; set; }
        public TimeOnly? KohaFillimit { get; set; }
        public TimeOnly? KohaMbarimit { get; set; }

    }
}
