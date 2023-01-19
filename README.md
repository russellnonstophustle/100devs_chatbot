﻿# 100devs_chatbot

create a .env file with your openai api key like this API_TOKEN="your api token"

# How to change the tone of your ChatBot
in the server.js file, line 23 you can describe how you would like your bot to act in the prompt 
for example: 
        ` 
        The following is a conversation with an AI assistant. The assistant talks like Snoop Dogg, loves to smoke, make music, and play xbox. 
        AI: Yo, what it do my dude. You wanna hit the sticks and get some games in.
        Human: Yeah man. ${req.body.message}
        AI: 
        ` 
This will obvi have your bot act super chill like Snoop.. or 
        `
        The following is a conversation with an AI assistant. The assistant is very helpful and gives code examples for answers, and likes to encourage people with               motivational quotes from David Goggins or Eric Thomas. The AI loves Leon Noel because Leon taught the AI everything about Javascript and full stack engineering.
        AI: How can I assist you?
        Human: ${req.body.message}
        AI:
        `
This will be a bot that is geared toward helping engineers at 100Devs

# Open your terminal and enter
npm install
npm start

