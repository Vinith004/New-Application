using DapperCore.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DapperApplication.Interfaces
{
    public interface IUnitOfWork
    {
        IProductRepository Products { get; }
        ILoginRepository<Login> Login { get; }
    }
}
