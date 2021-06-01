package com.higradius;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Edit_servlet extends HttpServlet{

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			// TODO Auto-generated method stub
			if(request.getParameter("method").equals("post")) 
	{
			try {
				  System.out.println("start data edit");
				  DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
				  String mysqlUrl = "jdbc:mysql://localhost:3306/h2h_internship" ;
				  Connection con = DriverManager.getConnection(mysqlUrl, "root" , "root@123");
			      	  
				  //String name_customer = request.getParameter("cust_name");
				  //String cust_number = request.getParameter("cust_no");
				  String doc_id = request.getParameter("inv_no");
				  //String total_open_amount = request.getParameter("amo");
				  //String due_in_date = request.getParameter("due_date");
				  String notes = request.getParameter("notes");
				  
				  String sql="UPDATE invoice_details SET total_open_amount = '180000',notes='datapoint' WHERE doc_id="+doc_id;
				  
				  PreparedStatement statement = con.prepareStatement(sql);
				  
				  
				  statement.executeUpdate();
				  PrintWriter out = response.getWriter();
				  out.println("succesfull");
				  
				  
			  }
			catch(SQLException se)
			{
				  //Handle errors for JDBC
				  se.printStackTrace();
				  
		    }
			catch(NumberFormatException ex)
			{
					  System.out.println("null exception");
					  ex.printStackTrace();
		    }
			catch(IllegalArgumentException i) 
			{
				  System.out.println("illegal argument exception");
				  i.printStackTrace();
			}
			  
			catch(Exception e)
			{
				  //Handle errors for Class.forName
				  e.printStackTrace();
		    }
			
			doPost(request, response);
		}
	}
}

