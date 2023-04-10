# DSGP-group-7

|  Name |  Student ID | RGU ID | IIT Email | 
|---|---|---|---|
| Vinuwara Ronath | 20210167  | 2119942  |  vinuwara.20210167@iit.ac.lk |   
| Kavindya Koralegei | 20210575  | 2117537  |  kavindya.20210575@iit.ac.lk | 
| Dineth Hasaranga | 20210537  | 2117526  |  dineth.20210537@iit.ac.lk | 
| Fazlan Fazeen| 20210137  | 2122091  |  fazlan.20210137@iit.ac.lk | 

1. installing dependencies 

 a.open cmd 
  select location of git file 
  go to app-development file - cd DSGP-group-7\app-development
  type npm install ~this install the dependencies needed to run the applications~

 b.open cmd
  select location of git file 
  go to gojarawalu-identification-tool - cd DSGP-group-7\gojarawalu-identification-tool
  type pip install -r requirements.txt ~ this install the dependencies for the brownspot and gojarawalu api to run ~

 c.open cmd 
  select location of git file 
  go to Rasa-Agriculture-Chatbot file cd DSGP-group-7\Rasa-Agriculture-Chatbot
  type pip rasa install ~ this install the dependencies for the rasa chatbot api ~
 
2. Starting the app

  a.rasa chatbot api

   open cmd 
   select location of git file   
   cd DSGP-group-7\Rasa-Agriculture-Chatbot
   rasa run -m models --enable-api --cors "*" --debug 
   ~ keep this cmd open ~

  b.brownspot and gojarawalu api

    open the main-api.py file in website-dev and run the python program 

  c.Launching the mobile application on an android emulator

   open new cmd
   select location of git file
   cd DSGP-group-7\app-development
   npm start 
   press a 
   ~ keep this cmd open ~
