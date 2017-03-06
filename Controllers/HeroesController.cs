using System.Collections.Generic;
using System.Linq;
using AngularTutorial.Models;
using Microsoft.AspNetCore.Mvc;

namespace AngularTutorial.Controllers
{
    [Route("api/[controller]")]
    public class HeroesController : Controller 
    {
        private static List<Hero> Heroes { get; } = new List<Hero>
        {
            new Hero { Id = 11, Name = "Mr. Nice" },
            new Hero { Id = 12, Name = "Narco" },
            new Hero { Id = 13, Name = "Bombasto" },
            new Hero { Id = 14, Name = "Celeritas" },
            new Hero { Id = 15, Name = "Magneta" },
            new Hero { Id = 16, Name = "RubberMan" },
            new Hero { Id = 17, Name = "Dynama" },
            new Hero { Id = 18, Name = "Dr IQ" },
            new Hero { Id = 19, Name = "Magma" },
            new Hero { Id = 20, Name = "Tornado" },
        };

        [HttpGet]
        public ActionResult GetAll()
        {
            return Json(Heroes);
        }

        [HttpGet("{id}")]
        public ActionResult GetById(int id)
        {
            var hero = Heroes.FirstOrDefault(x => x.Id == id);
            if (hero == null) { return NotFound(); }

            return Json(hero);
        }
    }
}