package com.higradius;

import java.io.IOException;
import java.lang.NumberFormatException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.higradius.Database;

public class servletpractise extends HttpServlet
{
   /**
	 * 
	 */

public void service(HttpServletRequest req,HttpServletResponse res) throws IOException
   ,NumberFormatException   {

       // Initialize the database 
  try
    {
		Connection con = Database.initializeDatabase();
		if (con != null)
		{
			System.out.println("Database Connected successfully");
			PrintWriter out=res.getWriter();
			// Create a SQL query to insert data into demo table 
            // demo table consists of two columns, so two '?' is used 
            PreparedStatement st = con 
                   .prepareStatement("insert into student values(?, ?)"); 
  
            // For the first parameter, 
            // get the data using request object 
            // sets the data to st pointer 
            //int data=Integer.parseInt(req.getParameter("id"));
            String str=req.getParameter("string");
            System.out.println(str);
            st.setInt(1, Integer.valueOf(req.getParameter("id")));
  
            // Same for second parameter 
            st.setString(2, req.getParameter("string")); 
           
            // Execute the insert command using executeUpdate() 
            st.executeUpdate();
            
            
            //fetch data from databased
            String query="select *from student";
            ResultSet rs = st.executeQuery(query);
     		while(rs.next())
     		{ 
     			int id= rs.getInt("id");
     			String name=rs.getString("first_name");
            	System.out.println(id+" "+name);
      
     		}
    		
            // Close all the connections 
            st.close(); 
            con.close(); 
			out.println("Databased connectivity sucessful!!!");
    
            out.println("Successfully Inserted");
            //out.println("fetch data from databased->"+name);
     
		} 
		else
		{
			System.out.println("Database Connection failed");
		}
	}
  catch (ClassNotFoundException e)
  {
		// TODO Auto-generated catch block
		e.printStackTrace();
		System.out.println("error");
  }
  catch (SQLException e) 
    {
		// TODO Auto-generated catch block
		e.printStackTrace();
		System.out.println("error");
	} 
       
   }

}
