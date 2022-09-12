using DapperApplication.Interfaces;
using DapperCore.Entities;
using DapperInfrastructure.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace New_Application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IUnitOfWork unitOfWork;
        public LoginController(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }
        [HttpPost]
        public async Task<IActionResult> UserExist(Login entity)
        {
            var Data = await unitOfWork.Login.UserExist(entity);
            return Ok(Data);
        }
    }
}
