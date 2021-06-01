package com.higradius;

import java.io.File;
import java.io.FileNotFoundException;
import java.sql.*;
import java.sql.Date;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

public class Milestone1 {

	public static void main(String[] args) throws SQLException {
		// TODO Auto-generated method stub
		//Connect database
		DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
		String mysqlUrl = "jdbc:mysql://localhost:3306/h2h_intership" ;
		Connection con = DriverManager.getConnection(mysqlUrl, "root" , "root@123");
		
		String fileName="1806087.csv";
		File datafile=new File(fileName);
		
		//Query for populating database
		String query="INSERT INTO invoice_details (business_code,cust_number,name_customer,"
				+ "clear_date,buisness_year,doc_id,posting_date,document_create_date,document_create_date1,"
				+ "due_in_date,invoice_currency,document,posting_id,area_business,"
				+ "total_open_amount,baseline_create_date,cust_payment_terms,invoice_id,isOpen) VALUES"
				+ "(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		
		//Using PreparedStatement for batch update
		PreparedStatement ps=con.prepareStatement(query);
		try {
			Scanner inputStream=new Scanner(datafile);
			//Splitting row-wise
			inputStream.useDelimiter("\n");
			//Skipping first row
			inputStream.next();
			
			//Finding out the time taken to populate
			long start = System.currentTimeMillis();
			
			while(inputStream.hasNext())
				{
				String row=inputStream.next();
				//Split into comma-separated tokens
				String[] data = row.split(",");
				
				Timestamp c_date;
				//Checking whether clear_date available or not				
				if(data[3].length()>=1)
				{
					//Convert into provided date-time format
					String format = "yyyy-MM-dd HH:mm:ss";
					String timestamp = data[3];
					DateTimeFormatter formatter = DateTimeFormatter.ofPattern(format);
					LocalDateTime localDateTime = LocalDateTime.from(formatter.parse(timestamp));
					c_date=Timestamp.valueOf(localDateTime);
					
				}else {
					c_date=null;
				}
				//Parsing data
				Integer doc_date=Integer.parseInt(data[7]);
				Integer doc_date1=Integer.parseInt(data[8]);
				Integer is_open=Integer.parseInt(data[18]);
				Double b_year=Double.parseDouble(data[4]);
				Double due_date=Double.parseDouble(data[9]);
				Double amount=Double.parseDouble(data[14]);
				Double base_date=Double.parseDouble(data[15]);
				Date p_date=Date.valueOf(data[6]);
				
				ps.setString(1, data[0]);
				ps.setString(2, data[1]);
				ps.setString(3, data[2]);
				ps.setTimestamp(4, c_date);
				ps.setDouble(5,b_year);
				ps.setString(6, data[5]);
				ps.setDate(7, p_date);
				ps.setInt(8, doc_date);ps.setInt(9, doc_date1);
				ps.setDouble(10, due_date);
				ps.setString(11, data[10]);
				ps.setString(12, data[11]);
				ps.setString(13, data[12]);
				ps.setString(14, data[13]);
				ps.setDouble(15, amount);
				ps.setDouble(16, base_date);
				ps.setString(17, data[16]);
				ps.setString(18, data[17]);
				ps.setInt(19, is_open);
				//batch update
				ps.addBatch();
				}
			
			//execute the batch update
			int[] count=ps.executeBatch();
			System.out.println("Total no. of rows entered: "+count.length);	
			long end = System.currentTimeMillis(); 
			//display the time taken
			System.out.println("Time taken: "+((end - start)/1000)/60+" min");
			inputStream.close();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}

}
