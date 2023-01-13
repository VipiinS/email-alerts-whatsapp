# email-alerts-whatsapp
This repository contains the code that is used to fetch emails from Gmail and sendin them to the user's Whatsapp number Using the Twilio environment

#Setup
 Create an twilio account (free)
 Connect your Whatsapp number to Your Twilio sandbox
      in the console section of th e twilio, go into Messaging > Try it out > Send a Whatsapp message
      
 <img width="855" alt="image" src="https://user-images.githubusercontent.com/113160961/212378229-90d88ba1-df7f-435a-89e8-821ebbc325bd.png">

  Follow the instructions to connect your whatsapp number to the twilio
  
#Functions
    Navigate to the functions ans assets tab in the left side
    In the services section create a new service
    Create an function of your desired name, I named mine: path_1 which was a default name
    enter the code in the repository in the function created
    
   Be sure to add the dependencies in the Settings section below environment variables:
   
   <img width="955" alt="image" src="https://user-images.githubusercontent.com/113160961/212379269-b741bd4f-f666-4715-ae15-44035d2ccc79.png">

  in the environment variables tab, enter your email and password 
  
  <img width="958" alt="image" src="https://user-images.githubusercontent.com/113160961/212379447-a71de6ec-6435-4021-8e85-77b2fdec32d7.png">

  Enter deploy all!
  wait for deployment
  after the function is deployed, click the COPY URL button below the code editor
  
  Navigate to Settings > Whatsapp sandbox settings > Sandbox configuration 
    Now enter the Copied URL into the 'WHEN A MESSAGE COMES IN' input box and enter save
    
  ## Thats it! the email aert feature is enabled
  
  ##Email whatsapp alert in action:
  
![WhatsApp Image 2023-01-13 at 22 51 16](https://user-images.githubusercontent.com/113160961/212380765-75d5fa91-dd34-46ae-9b4f-2d8cdee96d5e.jpg)

### Sending 'unseen' word fetches us our last 8 unseen messages of the day:

![2](https://user-images.githubusercontent.com/113160961/212380810-ffd18d24-d0eb-4fdf-a4d7-6e237312d210.jpg)

### sending help gives us the keywords that can be used in order to fetch us our emails
![3](https://user-images.githubusercontent.com/113160961/212380831-bf757ba0-abb9-488b-a097-5c7a65a66f1c.jpg)

  
   
    
