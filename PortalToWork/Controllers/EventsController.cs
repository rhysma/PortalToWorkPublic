using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PortalToWork.Models;
using Newtonsoft.Json;

namespace PortalToWork.Controllers
{
    [Route("api/[controller]")]
    public class EventsController : Controller
    {
        private static HttpClient client = new HttpClient();

        [HttpGet("[action]")]
        public IEnumerable<Event> Events()
        {
            Task<Events> evtTsk = GetEvents("https://jobs.api.sgf.dev/api/event?api_token=");
            return evtTsk.Result.data;
        }



        private async Task<Events> GetEvents(string uri)
        {
            Events evts = null;
            using (HttpResponseMessage res = await client.GetAsync(uri))
            using (HttpContent content = res.Content)
            {
                string data = await content.ReadAsStringAsync();
                if (data != null)
                {
                    evts = JsonConvert.DeserializeObject<Events>(data);
                }
            }
            return evts;
        }
    }
}