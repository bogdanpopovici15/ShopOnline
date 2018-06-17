using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ShopOnline.Models
{
    public class Item
    {




        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
        public virtual string Specification { get; set; }
        public virtual double Price { get; set; }
        [ForeignKey("Shop")]
        public int ShopId { get; set; }
        public virtual Shop Shop { get; set; }


    }
}