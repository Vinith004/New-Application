using DapperApplication.Interfaces;
using DapperCore.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace New_Application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IUnitOfWork unitOfWork;
        public ProductController(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var Data = await unitOfWork.Products.GetAllAsync();
            return Ok(Data);
        }
        [HttpPost]
        public async Task<IActionResult> Add(Products products)
        {
            var Data = await unitOfWork.Products.AddAsync(products);
            return Ok(Data);
        }
        [HttpDelete("{Id}")]
        public async Task<IActionResult> Delete(int Id)
        {
            var Data = await unitOfWork.Products.DeleteAsync(Id);
            return Ok(Data);
        }
        [HttpPut]
        public async Task<IActionResult> Update(Products products)
        {
            var Data = await unitOfWork.Products.UpdateAsync(products);
            return Ok(Data);
        }
    }
}
