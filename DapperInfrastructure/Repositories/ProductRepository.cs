using Dapper;
using DapperApplication.Interfaces;
using DapperCore.Entities;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DapperInfrastructure.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly IConfiguration _configuration;
        public ProductRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public async Task<int> AddAsync(Products entity)
        {
            var Sql = "insert into products(Name,Barcode,Decription,Rate,AddedOn) values (@Name,@Barcode,@Description,@Rate,getdate())";
            using (var connection = new SqlConnection(_configuration.GetConnectionString("ProductAppCon")))
            {
                connection.Open();
                var Result = await connection.ExecuteAsync(Sql, entity);
                return Result;
            }
        }

        public async Task<int> DeleteAsync(int id)
        {
            var sql = "Delete From products where Id = @ID";
            using (var connection = new SqlConnection(_configuration.GetConnectionString("ProductAppCon")))
            {
                connection.Open();
                var Result = await connection.ExecuteAsync(sql, new { ID = id });
                return Result;
            }
        }

        public async Task<List<Products>> GetAllAsync()
        {
            var sql = "Select ID, Name,Barcode,decription as Description,Rate,AddedOn,UpdatedOn from  products";
            using (var connection = new SqlConnection(_configuration.GetConnectionString("ProductAppCon")))
            {
                connection.Open();
                var Result = await connection.QueryAsync<Products>(sql);
                return Result.ToList();
            }
        }
            
        public async Task<Products> GetByIdAsync(int Id)
        {
            var sql = "Select * from  products where Id =@Id";
            using (var connection = new SqlConnection(_configuration.GetConnectionString("ProductAppCon")))
            {
                connection.Open();
                var Result = await connection.QueryFirstOrDefaultAsync<Products>(sql, new { Id = Id });
                return Result;
            }
        }

        public async Task<int> UpdateAsync(Products entity)
        {
            var sql = "Update  products set Name=@Name,Barcode=@Barcode,Decription =@Description,Rate =@Rate,UpdatedOn = getdate() where Id = @Id ";
            using (var connection = new SqlConnection(_configuration.GetConnectionString("ProductAppCon")))
            {
                connection.Open();
                var Result = await connection.ExecuteAsync(sql, entity);
                return Result;
            }
        }
    }
}
