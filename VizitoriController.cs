﻿using LabCourseBackEnd.Models;
using Microsoft.AspNetCore.Mvc;

using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace LabCourseBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VizitoriController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public VizitoriController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @" select * from Vizitori";
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
        public JsonResult Post(Vizitori l)
        {
            string query = @"
                        insert into Vizitori (VizitoriID,Emri,Mbiemri,BurgosuriID,EmriIBurgosurit)
                        values 
                        (
                        '" + l.VizitoriID + @"'
                        ,'" + l.Emri + @"'
                        ,'" + l.Mbiemri + @"'
                        ,'" + l.BurgosuriID + @"'
                        ,'" + l.EmriIBurgosurit + @"'
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
        public JsonResult Put(Vizitori ll)
        {
            string query = @" update dbo.Vizitori set
                     
                        VizitoriID=  '" + ll.VizitoriID + @"'
                        ,Emri=  '" + ll.Emri + @"'
                        ,Mbiemri=  '" + ll.Mbiemri + @"'
                        ,BurgosuriID=  '" + ll.BurgosuriID + @"'
                        ,EmriIBurgosurit=  '" + ll.EmriIBurgosurit + @"'
                         where  VizitoriID=  '" + ll.VizitoriID + @"'
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
                delete from Vizitori
                where VizitoriID=" + id + @"
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