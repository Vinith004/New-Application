using DapperApplication.Interfaces;
using DapperCore.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DapperInfrastructure.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        public UnitOfWork(IProductRepository product, ILoginRepository<Login> login)
        {
            Products = product;
            Login = login;
        }
        public IProductRepository Products { get; }
        public ILoginRepository<Login> Login { get; }
    }
}
