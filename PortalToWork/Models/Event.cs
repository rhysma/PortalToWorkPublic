using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortalToWork.Models
{
    public class Events
    {
        public List<Event> data { get; set; }
    }
    public class Event
    {
        public int id { get; set; }
        public string date_begin { get; set; }
        public string date_end { get; set; }
        public object date_expires { get; set; }
        public string title { get; set; }
        public Location location { get; set; }
        public int event_id { get; set; }
        public string description { get; set; }
        public string phone { get; set; }
        public string email { get; set; }
        public int cost { get; set; }
        public string url { get; set; }
        public string url_image { get; set; }
        public DateTime created_at { get; set; }
        public DateTime updated_at { get; set; }
    }
}
