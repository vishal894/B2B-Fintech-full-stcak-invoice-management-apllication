package com.higradius;

import java.sql.*;
import java.util.*;

public class MilestoneMain {

	public static void main(String[] args) throws SQLException {
		// TODO Auto-generated method stub
		//Connect database
		DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
		String mysqlUrl = "jdbc:mysql://localhost:3306/invoices" ;
		Connection con = DriverManager.getConnection(mysqlUrl, "root" , "root");
		
		//Create retrieve statement
		Statement stmt = con.createStatement();
		ResultSet rs = stmt.executeQuery("select * from invoice");
		ArrayList<MilestonePojo> invoiceList = new ArrayList<>();
		
		//Using the POJO class to map the database
		while (rs.next()) {
			MilestonePojo obj = new MilestonePojo();
			obj.setBusiness_code(rs.getString("business_code"));
			obj.setCust_number(rs.getString("cust_number"));
			obj.setName_customer(rs.getString("name_customer"));
			obj.setClear_date(rs.getTimestamp("clear_date"));
			obj.setBuisness_year(rs.getDouble("buisness_year"));
			obj.setDoc_id(rs.getString("doc_id"));
			obj.setPosting_date(rs.getDate("posting_date"));
			obj.setDocument_create_date(rs.getInt("document_create_date"));
			obj.setDocument_create_date1(rs.getInt("document_create_date1"));
			obj.setDue_in_date(rs.getDouble("due_in_date"));
			obj.setInvoice_currency(rs.getString("invoice_currency"));
			obj.setDocument(rs.getString("document"));
			obj.setPosting_id(rs.getString("posting_id"));
			obj.setArea_business(rs.getString("area_business"));
			obj.setTotal_open_amount(rs.getDouble("total_open_amount"));
			obj.setBaseline_create_date(rs.getDouble("baseline_create_date"));
			obj.setCust_payment_terms(rs.getString("cust_payment_terms"));
			obj.setInvoice_id(rs.getString("invoice_id"));
			obj.setIsOpen(rs.getInt("isOpen"));
			invoiceList.add(obj);
			}
		
		//Display some values of the object list
		for (MilestonePojo obj : invoiceList) {
			System.out.print ("Customer name: "+obj.getName_customer()
			+", Doc create date: "+obj.getDocument_create_date1()
			+", Amount due: "+obj.getTotal_open_amount()
			+", Clear date: "+obj.getClear_date()
			+", Payment terms: "+obj.getCust_payment_terms());
			System.out.println();
			}

	}

}
