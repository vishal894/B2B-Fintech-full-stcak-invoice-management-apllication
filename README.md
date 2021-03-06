

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

# The objective of my project is to  build a Machine Learning Model to predict the payment date of an invoice when it gets created in the system. Categorize the invoice   into different aging buckets based on predicted payment date. Finally, the predicted payment dates and necessary data is displayed on a Web Application . This web   application helps a company to visualize the entire data.
The motivation of our project is to help businesses to keep track of payment dates in an organized and efficient manner.
In this project the different technologies used are:
   .Different types of ML models to first predict the payment dates of various companies like Linear regression, Multiple regression, Logistic Regression etc.
   .For the front end development I used React js 
   .For Backend development Java was used to create the servlets to perform various CRUD operations on the given data. 
   .MySql  database has been used to store the data.




With the help of this step we found that the delay , day_of_the_week_due, total_open_amount,invoice_currency are the  features which we see has the most impact on whether a company will be late in paying its dues or whether it will be able pay its dues on time.  
Finally , linear regression was the algorithm which I used to train my  ML model to predict due date of payment. 

![image](https://user-images.githubusercontent.com/63975935/120331837-d1644c80-c30b-11eb-92b5-fe92cbd775ae.png)

![image](https://user-images.githubusercontent.com/63975935/120331910-e04aff00-c30b-11eb-891b-f4100e65194f.png)   <html> </html> ![image](https://user-images.githubusercontent.com/63975935/120331966-eb059400-c30b-11eb-80d1-64ba4df58cc1.png)

![image](https://user-images.githubusercontent.com/63975935/120332415-594a5680-c30c-11eb-8d30-17f562bd2045.png)


# A snapshot of the final UI made by me to visualize the data is shown below:

![image](https://user-images.githubusercontent.com/63975935/120334373-3456e300-c30e-11eb-8964-4d7ad9a0fab6.png)

# ADD BUTTON DIALOG BOX
![image](https://user-images.githubusercontent.com/63975935/120333836-b7c40480-c30d-11eb-8717-f28308026546.png)

# EDIT BUTTON DIALOG BOX
![image](https://user-images.githubusercontent.com/63975935/120333789-abd84280-c30d-11eb-85e4-e67b74f6f4a9.png)

# DELETE BUTTON DIALOG BOX
![image](https://user-images.githubusercontent.com/63975935/120333724-9c58f980-c30d-11eb-9257-ee94ba4272c2.png)

# View Correspondence
![image](https://user-images.githubusercontent.com/63975935/120333678-8ea37400-c30d-11eb-8bae-fc314a2395e4.png)

# View correspondence 2
![image](https://user-images.githubusercontent.com/63975935/120333944-d32f0f80-c30d-11eb-90fb-9c7ba7a4746b.png)


# PredictButtonFunctionality:
The Predict button will remain in disabled state if no rows are selected.
Whenever one or more rows are selected, the Predict button will be activated.
After clicking on the Predict button, the Predicted Payment Date and Predicted AgingBucket will be populated for the respective records.

# Conclusion
In this project, I have built an AI-Enabled FinTech B2B Order Management Application using regression model to predict payment of order will be delayed or not. The accuracy of the model turned out to be 85%. The same has been then deployed using Flask Framework and React JS for frontend.




