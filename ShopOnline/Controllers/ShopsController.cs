using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using ShopOnline.Infrastructure;
using ShopOnline.Models;

namespace ShopOnline.Controllers
{
    public class ShopsController : Controller
    {
        private ShopDB db = new ShopDB();

        // GET: Shops
        public ActionResult Index(string searching)
        {
            var search = from s in db.Shops
                         select s;
            if (!String.IsNullOrEmpty(searching))
            {
                search = search.Where(c => c.Name.Contains(searching));
            }
            return View(search);
        }

        public PartialViewResult ShopPartial()
        {
            var shops = db.Shops.ToList();
            return PartialView("_Shops", shops);
        }

        // GET: Shops/Details/5
        public ActionResult Details(int? id)
        {
            var model = db.Shops.Single(d => d.Id == id);
            return View(model);
        }

        // GET: Shops/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Shops/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        //[ValidateAntiForgeryToken]
        public JsonResult Create([Bind(Include = "Id,Name,Adress")] Shop shop)
        {
            if (ModelState.IsValid)
            {
                db.Shops.Add(shop);
                db.SaveChanges();
                return Json(true);
            }

            return Json(false);
        }

        // GET: Shops/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Shop shop = db.Shops.Find(id);
            if (shop == null)
            {
                return HttpNotFound();
            }
            return PartialView(shop);
        }

        // POST: Shops/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]

        public JsonResult Edit([Bind(Include = "Id,Name,Adress")] Shop shop)
        {
            if (ModelState.IsValid)
            {
                db.Entry(shop).State = EntityState.Modified;
                db.SaveChanges();
                return Json(true);
            }
            return Json(false);
        }




        // GET: Shops/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Shop shop = db.Shops.Find(id);
            if (shop == null)
            {
                return HttpNotFound();
            }
            return PartialView(shop);
        }

        // POST: Shops/Delete/5
        [HttpPost, ActionName("Delete")]

        public JsonResult DeleteConfirmed(int id)
        {
            Shop shop = db.Shops.Find(id);
            db.Shops.Remove(shop);
            db.SaveChanges();
            return Json(true);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }



    }
}
