using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LabCourseBackEnd.Data;
using LabCourseBackEnd.Models;

using System.Data;
using System.Data.SqlClient;

namespace LabCourseBackEnd.Controllers;

    [Route("api/[controller]")]
    [ApiController]
    public class DrejtoriController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public DrejtoriController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @" select * from Drejtori";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProjektiAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new(query, myCon))
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
        public JsonResult Post(Drejtori l)
        {
            string query = @"
                        insert into Drejtori (DrejtoriID,SektoriID,Emri, Mbiemri, Qyteti, Rruga, Zipkodi, DateLindja, Gjinia)
                        values 
                        (
                        '" + l.DrejtoriID + @"'
                        ,'" + l.SektoriID + @"'
                        ,'" + l.Emri + @"'
                        ,'" + l.Mbiemri + @"'
                        ,'" + l.Qyteti + @"'
                        ,'" + l.Rruga + @"'
                        ,'" + l.ZipKodi + @"'
                        ,'" + l.DateLindja + @"'
                        ,'" + l.Gjinia + @"'
                        )
                        ";

            DataTable table = new();
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
        public JsonResult Put(Drejtori ll)
        {
            string query = @" update dbo.Drejtori set
                     
                        DrejtoriID=  '" + ll.DrejtoriID + @"'
                        ,SektoriID=  '" + ll.SektoriID + @"'
                        ,Emri=  '" + ll.Emri + @"'
                        ,Mbiemri=  '" + ll.Mbiemri + @"'
                        ,Qyteti=  '" + ll.Qyteti + @"'
                        ,Rruga=  '" + ll.Rruga + @"'
                        ,Zipkodi=  '" + ll.ZipKodi + @"'
                        ,DateLindja=  '" + ll.DateLindja + @"'
                        ,Gjinia=  '" + ll.Gjinia + @"'
                         where  DrejtoriID=  '" + ll.DrejtoriID + @"'
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
                delete from Drejtori
                where DrejtoriID=" + id + @"
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
