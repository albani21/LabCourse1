using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Data;
using PrisonBackEnd.Models;


namespace PrisonBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StafiController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public StafiController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    select  StafiID,DrejtoriID,Emri,Mbiemri,Qyteti,Rruga,Zipkodi,DateLindja,Gjinia  from dbo.Stafi";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProjektAppCon");
            SqlDataReader myReader;
            using(SqlConnection myCon=new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using(SqlCommand myCommand = new SqlCommand(query,myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Stafi s)
        {
            string query = @"
                    insert into dbo.Stafi(StafiID,DrejtoriID,Emri,Mbiemri,Qyteti,Rruga,Zipkodi,Datelindja,Gjinia)
                     values
                    (
                      '" + s.StafiID + @"'
                      ,'" + s.DrejtoriID + @"'
                      ,'" + s.Emri + @"'
                      ,'" + s.Mbiemri + @"'
                      ,'" + s.Qyteti + @"'
                      ,'" + s.Rruga + @"'
                      ,'" + s.Zipkodi + @"'
                      ,'" + s.DateLindja + @"'
                      ,'" + s.Gjinia + @"'
                       )
                       ";
                    

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProjektAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(Stafi s)
        {

            string query = @" update dbo.Stafi set
                     
                       StafiID='" + s.StafiID + @"',
                       DrejtoriID='" + s.DrejtoriID + @"',
                       Emri='" + s.Emri + @"',
                       Mbiemri='" + s.Mbiemri + @"',
                       Qyteti='" + s.Qyteti + @"',
                       Rruga='" + s.Rruga + @"',
                       Zipkodi='" + s.Zipkodi + @"',
                       DateLindja='" + s.DateLindja + @"',
                       Gjinia='" + s.Gjinia + @"'
                       where StafiID= '" + s.StafiID + @"'
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
                delete from Stafi
                where StafiID=" + id + @"
            ";





            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProjektAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Deleted Successfully");
        }

    }
}
