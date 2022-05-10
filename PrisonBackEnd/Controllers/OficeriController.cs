using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Data;
using PrisonBackEnd.Models;
using Microsoft.Extensions.Configuration;

namespace PrisonBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OficeriController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public OficeriController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @" select * from Oficeri";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProjektiAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Oficeri o)
        {
            string query = @"
                        insert into Oficeri (OficeriID)
                        values 
                        (
                        '" + o.OficeriID + @"'
                        )
                        ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProjektiAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added Succesfully");

        }

        [HttpPut]
        public JsonResult Put(Oficeri o)
        {
            string query = @" update dbo.Oficeri set
                     
                        OficeriID=  '" + o.OficeriID + @"'
                         where  OficeriID=  '" + o.OficeriID + @"'
                        ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProjektiAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Updated Succesfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @" 
                delete from Oficeri
                where OficeriID=" + id + @"
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProjektiAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Deleted Succesfully");
        }

    }
}
