using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShopOnline.Models
{
    public class Shop
    {
        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
        public virtual string Adress { get; set; }
        public virtual ICollection<Item> Items { get; set; }
    }
}