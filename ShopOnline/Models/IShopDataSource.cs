using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopOnline.Models
{
    public interface IShopDataSource
    {
        IQueryable<Shop> Shops { get; }
        IQueryable<Item> Items { get; }


    }
}
