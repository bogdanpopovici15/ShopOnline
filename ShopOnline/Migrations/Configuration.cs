namespace ShopOnline.Migrations
{
    using ShopOnline.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ShopOnline.Infrastructure.ShopDB>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(ShopOnline.Infrastructure.ShopDB context)
        {
            context.Shops.AddOrUpdate(s => s.Name,
                new Shop() { Name = "Shop 1" },
                new Shop() { Name = "Shop 2" }

                );
        }
    }
}
