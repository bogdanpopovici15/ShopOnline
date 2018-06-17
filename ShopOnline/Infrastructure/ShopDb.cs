using ShopOnline.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ShopOnline.Infrastructure
{
    public class ShopDB : DbContext, IShopDataSource
    {

        public DbSet<Shop> Shops { get; set; }
        public DbSet<Item> Items { get; set; }



        IQueryable<Shop> IShopDataSource.Shops
        {
            get { return Shops; }
        }

        IQueryable<Item> IShopDataSource.Items
        {
            get { return Items; }
        }





    }
}