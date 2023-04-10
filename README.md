 The Research:
 
 Paddy Disease & Weed Identification and Solution Recommendation Mobile Application
 DSGP-group-7

|  Name |  Student ID | RGU ID | IIT Email | 
|---|---|---|---|
| Vinuwara Ronath | 20210167  | 2119942  |  vinuwara.20210167@iit.ac.lk |   
| Kavindya Koralegei | 20210575  | 2117537  |  kavindya.20210575@iit.ac.lk | 
| Dineth Hasaranga | 20210537  | 2117526  |  dineth.20210537@iit.ac.lk | 
| Fazlan Fazeen| 20210137  | 2122091  |  fazlan.20210137@iit.ac.lk | 

Introduction

Paddy cultivation in Sri Lanka is given utmost significance in the agriculture industry since rice is considered as the staple food of Sri Lanka. Detection of disease and weeds in paddy has always been a challenging task and currently, farmers use traditional procedures and seek the guidance of regional agriculture officers to detect the diseases and weed and to get solutions for them.

Hence, in order to find a Digital solution in the form of a Mobile Application utilizing Data Science and Artificial Intelligence Concepts , Group 07 of 2nd Year Data Science Group Project in Informatics Institute of Technology (IIT) has come up with a solution as mentioned above.

This mobile application is used to identify two main Paddy disease and weed; Brown spot and Wrinkle duck beak(Gojarawalu). Users are given the opportunity to upload a picture of the paddy field which they want to clearly identify whether it is Brown spot/ Wrinkle duck beak and the mobile application will let the user know the results with a severity percentage of the disease. 
The solutions for the paddy weeds and  diseases would be provided by the application and through a Chatbot function, the users are also able to ask questions regarding paddy agriculture and get the needed information. 

Brown Spot Image Classification

01. Image is captured or uploaded from the app.
02. Then the api (fast api) loads the model classifier and then image is classified according to the severity such as Healthy , mild and severe and sends the message to the front end
03. Then it displays that message to the user 

Gojarawalu Image Identification
 
01. Image is captured or uploaded from the app.
02. Then the api (fast api) loads the model classifier and then image is identified ,if the user uploads an image of a healthy paddy leaf it would display as "not Gojarawalu" else if the user uploads an image that has Gojarawalu it will confirm its Gojarawalu
03. Sends the message to the frontend
04. Then it displays that message to the user

Rasa Chatbot

01. When the user asks a question from the chatbot the chatbot provides the solutions. The chatbot is trained to answer questions in the paddy agriculture domain.
02. An Api hosted through rasa-api would use a pretrained model
02. The chat bot would scan the request for similarities from its model
03. After the model identifies the question it will give a response accordingly
04. The users can take information of domain experts and related institutions via the chatbot. The main purpose of the AI chatbot is to help farmers solve their problems without the presence of a field officer.  

Recommendation section

The main intention of the section is to provide the users with remedies and instructions to eradicate the weed 'Gojarawalu' and treat the plants infected with the disease 'Brown Spot'.

Login page

The backend and authentication is handled the Google Firebase for the login page. Has the ability to register a new user or login as a registered user.

Libraries Used

Several libraries to implement the core functionalities of the system. The main libraries is summarized in the table below

| Libraries                     | Version  |
| ----------------------------- | -------- |
|                  AI Model                |
| TensorFlow                    | 2.5      |
| Numpy                         | 1.24.2   |
| matplotlib                    |3.7.1     |
| tensorflow-addons             | 0.19.0   |
| tensorflow-model-optimization | 0.7.3    |
| Rasa                          | 3.4.2    |
|           Mobile Application             |
| React                         |18.2.0    |
| react-native                  | 0.70     |
| expo-image-picker             | 14.1.1   |
| react-native-rasa             | 0.3.0    |

IDE and Frameworks

The primary IDE used for developing the mobile application is Android Studio – Electric eel since it is widely considered the standard IDE for Android development and offers a user-friendly interface and Visual Studio Code (VS Code) is also utilized. To develop AI models, the preferred Integrated Development Environment (IDE) was Jupyter lab, which was installed on top of the Anaconda distribution.


| Component              | Tool/Technology               | Version          |
| ---------------------- | ----------------------------- | ---------------- |
| Programming Language   |React Native                   |17.0.2            |
|                        |Python                         |3.9 / 3.7.4       |
| UI Framework           |Figma                          |93.4.0            |
| IDE                    |Android Studio - Electric eel  |2022.1.1 Patch 2  |
|                        |Visual Studio code             |1.76.0            |
|                        |JupyterLab                     |3.4.4             |
|                        |PyCharm                        |2022.3.1          |


1. Installing dependencies 

 a.Open cmd <br>
   Select location of git file <br>
   Go to app-development file - cd DSGP-group-7\app-development <br> 
   Type npm install - this install the dependencies needed to run the applications <br> 

 b.Open cmd <br>
   Select location of git file <br>
   Go to gojarawalu-identification-tool - cd DSGP-group-7\gojarawalu-identification-tool <br>
   Type pip install -r requirements.txt this install the dependencies for the brownspot and gojarawalu api to run <br>

 c.Open cmd <br> 
   Select location of git file <br> 
   Go to Rasa-Agriculture-Chatbot file cd DSGP-group-7\Rasa-Agriculture-Chatbot <br>
   Type pip rasa install - this install the dependencies for the rasa chatbot api <br>
 
2. Starting the app <br>

  a.Rasa chatbot api <br>

   Open cmd <br> 
   Select location of git file <br>   
   cd DSGP-group-7\Rasa-Agriculture-Chatbot <br>
   rasa run -m models --enable-api --cors "*" --debug <br> 
   ~ keep this cmd open ~.

  b.Brownspot and gojarawalu api <br>

    open the main-api.py file in website-dev and run the python program <br> 

  c.Launching the mobile application on an android emulator <br>

   Open new cmd <br>
   Select location of git file <br>
   cd DSGP-group-7\app-development <br>
   npm start <br>
   Press a <br> 
   ~ keep this cmd open ~.
   
  
