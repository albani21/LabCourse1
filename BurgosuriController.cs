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
public class BurgosuriController : ControllerBase
{
    private readonly IConfiguration _configuration;

    public BurgosuriController(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    [HttpGet]
    public JsonResult Get()
    {
        string query = @" select * from Burgosuri";
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
    public JsonResult Post(Burgosuri l)
    {
        string query = @"
                        insert into Burgosuri (BurgosuriID,Emri, Mbiemri, Qyteti, Rruga, ZipKodi,DataHyrjes,DataDaljes,DateLindja,QeliaID, Gjinia)
                        values 
                        (
                        '" + l.BurgosuriID + @"'
                        ,'" + l.Emri + @"'
                        ,'" + l.Mbiemri + @"'
                        ,'" + l.Qyteti + @"'
                        ,'" + l.Rruga + @"'
                        ,'" + l.ZipKodi + @"'
                        ,'" + l.DataHyrjes + @"'
                        ,'" + l.DataDaljes + @"'
                        ,'" + l.DateLindja + @"'
                        ,'" + l.QeliaID + @"'
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
    public JsonResult Put(Burgosuri ll)
    {
        string query = @" update dbo.Burgosuri set
                     
                        BurgosuriID=  '" + ll.BurgosuriID + @"'
                        ,Emri=  '" + ll.Emri + @"'
                        ,Mbiemri=  '" + ll.Mbiemri + @"'
                        ,Qyteti=  '" + ll.Qyteti + @"'
                        ,Rruga=  '" + ll.Rruga + @"'
                        ,ZipKodi=  '" + ll.ZipKodi + @"'
                        ,DataHyrjes=  '" + ll.DataHyrjes + @"'
                        ,DataDaljes=  '" + ll.DataDaljes + @"'
                        ,DateLindja=  '" + ll.DateLindja + @"'
                        ,QeliaID=  '" + ll.QeliaID + @"'
                        ,Gjinia=  '" + ll.Gjinia + @"'
                         where  BurgosuriID=  '" + ll.BurgosuriID + @"'
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
                delete from Burgosuri
                where BurgosuriID=" + id + @"
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
