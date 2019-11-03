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
    public class JobsController : Controller
    {
        private static HttpClient client = new HttpClient();

        [HttpGet("[action]")]
        public IEnumerable<Job> Jobs()
        {
            Task<Jobs> jobTsk = GetJobs("https://jobs.api.sgf.dev/api/job?api_token=");
            return jobTsk.Result.data.Take(20);
        }



        private async Task<Jobs> GetJobs(string uri)
        {
            Jobs jobs = null;
            using (HttpResponseMessage res = await client.GetAsync(uri))
            using (HttpContent content = res.Content)
            {
                string data = await content.ReadAsStringAsync();
                if (data != null)
                {
                    jobs = JsonConvert.DeserializeObject<Jobs>(data);
                }
            }
            return jobs;
        }
    }
}
