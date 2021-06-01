package com.higradius;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Types;
import java.util.ArrayList;

import javax.servlet.ServletException;
//import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class InvoiceServlet
 */
//@WebServlet("/InvoiceServlet")
public class Fetchdata_servlet extends HttpServlet {
	//private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Fetchdata_servlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		int pageid=1,total=20;
		String spageid=request.getParameter("page");  
        if(spageid!=null) {
        	pageid=Integer.parseInt(spageid);  
            //total=5;  
            if(pageid==1){}  
            else{  
                pageid=pageid-1;  
                pageid=pageid*total+1;  
            }  
        }
        		
		try {			
			DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
			String mysqlUrl = "jdbc:mysql://localhost:3306/h2h_internship" ;
			Connection con = DriverManager.getConnection(mysqlUrl, "root" , "root@123");
			if(con!=null)
			{
				System.out.println("Succeful connected");
			
			Statement stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery("select name_customer,cust_number,invoice_id,"
					+ "total_open_amount,due_in_date ,notes from invoice_details "
					+ "limit "+(pageid-1)+","+total);
			ArrayList<Invoicedetail> invoiceList = new ArrayList<>();
				        
			while(rs.next()) {				
			Invoicedetail resp = new Invoicedetail();
			String cust_name = rs.getString("name_customer");
			String cust_no = rs.getString("cust_number");
			String inv_no = rs.getString("invoice_id");
			String amo = rs.getString("total_open_amount");
			String due_date = rs.getString("due_in_date");
			String note = rs.getString("notes");
			
			resp.setCust_name(cust_name);
			resp.setCust_no(cust_no);
			resp.setInv_no(inv_no);
			resp.setAmo(amo);
			resp.setDue_date(due_date);
			resp.setNote(note);
			invoiceList.add(resp);
			}
			
			Gson gson = new Gson();
			String data = gson.toJson(invoiceList);
			PrintWriter out = response.getWriter();
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			out.print(data);
			out.flush();
			}
			else
			{
				System.out.println("Fail to connect");
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		if(!request.getParameter("method").equals("delete")) {
		try {
			  DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
			  String mysqlUrl = "jdbc:mysql://localhost:3306/h2h_internship" ;
			  Connection con = DriverManager.getConnection(mysqlUrl, "root" , "root@123");
		      	  
			  String name_customer = request.getParameter("cust_name");
			  String cust_number = request.getParameter("cust_no");
			  String doc_id = request.getParameter("inv_no");
			  String total_open_amount = request.getParameter("amo");
			  String due_in_date = request.getParameter("due_date");
			  String notes = request.getParameter("notes");
			  
			  String sql="INSERT INTO invoice_details (business_code,cust_number,name_customer,"
						+ "clear_date,business_year,doc_id,posting_date,document_create_date,"
						+ "due_in_date,invoice_currency,posting_id,area_business,"
						+ "total_open_amount,baseline_create_date,cust_payment_terms,invoice_id,isOpen,notes) VALUES"
						+ "(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
			  
			  PreparedStatement statement = con.prepareStatement(sql);
			  statement.setNull(1, Types.NULL);
			  statement.setString(2,cust_number);
			  statement.setString(3,name_customer);
			  statement.setNull(4, Types.NULL);
			  statement.setNull(5, Types.NULL);
			  statement.setString(6,doc_id);
			  statement.setNull(7, Types.NULL);
			  statement.setNull(8, Types.NULL);
			  //statement.setNull(9, Types.NULL);
			  statement.setDouble(9,Double.parseDouble(due_in_date));
			  statement.setNull(10, Types.NULL);
			  //statement.setNull(11, Types.NULL);
			  statement.setNull(11, Types.NULL);
			  statement.setNull(12, Types.NULL);
			  statement.setDouble(13,Double.parseDouble(total_open_amount));
			  statement.setNull(14, Types.NULL);
			  statement.setNull(15, Types.NULL);
			  statement.setNull(16, Types.NULL);
			  statement.setNull(17, Types.NULL);
			  statement.setString(18,notes);
			  
			  statement.executeUpdate();
			  
			  
		  }catch(SQLException se){
			  //Handle errors for JDBC
			  se.printStackTrace();
			  }catch(NumberFormatException ex){
				  System.out.println("null exception");
				  ex.printStackTrace();
			  }
		  catch(IllegalArgumentException i) {
			  System.out.println("illegal argument exception");
			  i.printStackTrace();
		  }
		  
		  catch(Exception e){
			  //Handle errors for Class.forName
			  e.printStackTrace();
			  }
		
		doGet(request, response);
	}
		else {
			try {
				  //response.addHeader("Access-Control-Allow-Origin", "*");
				  DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
				  String mysqlUrl = "jdbc:mysql://localhost:3306/h2h_internship" ;
				  Connection con = DriverManager.getConnection(mysqlUrl, "root" , "root@123");
				 
				  String doc_id=request.getParameter("inv_no");
				  //System.out.println(doc_id);
				  String sql =  "DELETE FROM invoice_details WHERE doc_id = "+doc_id;
				  Statement stmt=con.prepareStatement(sql);
				  stmt.executeUpdate(sql);
			  }
				  catch(SQLException se){
				  //Handle errors for JDBC
				  se.printStackTrace();
				  }catch(NumberFormatException ex){
					  System.out.println("null exception");
					  ex.printStackTrace();
				  }
			  catch(IllegalArgumentException i) {
				  System.out.println("illegal argument exception");
				  i.printStackTrace();
			  }
			  
			  catch(Exception e){
				  //Handle errors for Class.forName
				  e.printStackTrace();
				  }
		
			doGet(request, response);
		}
		
	}
	
}

