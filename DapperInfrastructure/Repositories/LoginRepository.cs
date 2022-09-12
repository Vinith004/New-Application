using DapperApplication.Interfaces;
using DapperCore.Entities;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Dapper.SqlMapper;

namespace DapperInfrastructure.Repositories
{
    public class LoginRepository:ILoginRepository<Login>
    {
        private readonly IConfiguration _configuration;
        public LoginRepository(IConfiguration configuration)
        {
            this._configuration = configuration;
        }

        public async Task<int> UserExist(Login entity)
        {
            var sql = "select 1 from UserProfile where Email = @Email and Password = @Password";
            using (var connection = new SqlConnection(_configuration.GetConnectionString("ProductAppCon")))
            {
                connection.Open();
                var Result = await connection.ExecuteScalarAsync<int>(sql, entity);
                return Result;
            }
        }
    }
}
