﻿using System;
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
        string query = @" select * from Stafi";
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
    public JsonResult Post(Stafi l)
    {
        string query = @"
                        insert into Stafi (StafiID,DrejtoriID,Emri, Mbiemri, Qyteti, Rruga, Zipkodi, DateLindja, Gjinia)
                        values 
                        (
                        '" + l.StafiID + @"'
                        ,'" + l.DrejtoriID + @"'
                        ,'" + l.Emri + @"'
                        ,'" + l.Mbiemri + @"'
                        ,'" + l.Qyteti + @"'
                        ,'" + l.Rruga + @"'
                        ,'" + l.Zipkodi + @"'
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
    public JsonResult Put(Stafi ll)
    {
        string query = @" update dbo.Stafi set
                     
                        StafiID=  '" + ll.StafiID + @"'
                        ,DrejtoriID=  '" + ll.DrejtoriID + @"'
                        ,Emri=  '" + ll.Emri + @"'
                        ,Mbiemri=  '" + ll.Mbiemri + @"'
                        ,Qyteti=  '" + ll.Qyteti + @"'
                        ,Rruga=  '" + ll.Rruga + @"'
                        ,Zipkodi=  '" + ll.Zipkodi + @"'
                        ,DateLindja=  '" + ll.DateLindja + @"'
                        ,Gjinia=  '" + ll.Gjinia + @"'
                         where  StafiID=  '" + ll.StafiID + @"'
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
