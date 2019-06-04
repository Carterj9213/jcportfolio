using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using jcportfolio.Models;

namespace jcportfolio.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        [HttpGet]
        public ActionResult Contact()
        {
            var model = new EmailModel();
            return View(model); ;
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Contact(EmailModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var standardBodyMessage = $"<h3>You have received an email from {model.FromEmail}</h3>";
                    standardBodyMessage += $"<br /> {model.Body}";

                    var from = "JohnPortfolio<jc56wrestling@yahoo.com>";
                    var email = new MailMessage(from, ConfigurationManager.AppSettings["emailto"])
                    {
                        Subject = model.Subject,
                        Body = $"{standardBodyMessage}",
                        IsBodyHtml = true
                    };
                    var svc = new PersonalEmail();
                    await svc.SendAsync(email);
                    return RedirectToAction("Index", "Home");
                    //return View(new EmailModel());
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    await Task.FromResult(0);
                }
            }
            return View(model);

        }




        public ActionResult GridDemo()
        {
            return View();
        }

        public ActionResult JSmath()
        {
            return View();
        }

        public ActionResult FizzBuzz()
        {
            return View();
        }

    }
}