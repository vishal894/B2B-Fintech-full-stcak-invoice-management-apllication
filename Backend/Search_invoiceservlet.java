package com.higradius;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;


//@WebServlet("/Search")
public class Search_invoiceservlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static Connection conn = null;
	private static PreparedStatement stmt = null;
    
    public Search_invoiceservlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String search = request.getParameter("search");
		
		ArrayList<Invoicedetail> data = new ArrayList<Invoicedetail>();
		
		try {
			   DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
			  String mysqlUrl = "jdbc:mysql://localhost:3306/h2h_internship" ;
			  Connection con = DriverManager.getConnection(mysqlUrl, "root" , "root@123");
		      	  
		
			stmt = con.prepareStatement(
						"SELECT * FROM invoice_details WHERE invoice_id LIKE \'" + search + "%\' LIMIT 30"
						);
			ResultSet result = stmt.executeQuery();
			
			while(result.next()) {
				Invoicedetail pojo = new Invoicedetail();
				pojo.setCust_name(result.getString(2));
				pojo.setCust_no(result.getString(3));
				pojo.setDue_date(result.getString(9));
				pojo.setAmo(result.getString(14));
				pojo.setInv_no(result.getString(17));
				pojo.setNote(result.getString(19));
				
				data.add(pojo);
			}
			
			Gson gson = new Gson();
			String resData = gson.toJson(data);
			PrintWriter out = response.getWriter();
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8"); 
			out.print(resData);
			out.flush();
			
			result.close();
			stmt.close();
			
		} catch(Exception e) {
			e.printStackTrace();
		}
	}

}
