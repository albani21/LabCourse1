﻿using LabCourseBackEnd.Models;
using Microsoft.AspNetCore.Mvc;

using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace LabCourseBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PushimiController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public PushimiController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @" select * from Pushimi";
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
        public JsonResult Post(Pushimi l)
        {
            string query = @"
                        insert into Pushimi (PushimiID,QeliaID,Dita, Data, Orari, KohaFillimit,KohaMbarimit)
                        values 
                        (
                        '" + l.PushimiID + @"'
                        ,'" + l.QeliaID + @"'
                        ,'" + l.Dita + @"'
                        ,'" + l.Data + @"'
                        ,'" + l.Orari + @"'
                        ,'" + l.KohaFillimit + @"'
                        ,'" + l.KohaMbarimit + @"'
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
        public JsonResult Put(Pushimi ll)
        {
            string query = @" update dbo.Pushimi set
                     
                        PushimiID=  '" + ll.PushimiID + @"'
                        ,QeliaID=  '" + ll.QeliaID + @"'
                        ,Dita=  '" + ll.Dita + @"'
                        ,Data=  '" + ll.Data + @"'
                        ,Orari=  '" + ll.Orari + @"'
                        ,KohaFillimit=  '" + ll.KohaFillimit + @"'
                        ,KohaMbarimit=  '" + ll.KohaMbarimit + @"'
                         where  PushimiID=  '" + ll.PushimiID + @"'
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
                delete from Pushimi
                where PushimiID=" + id + @"
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