const {Configuration, OpenAIApi} = require('openai');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const config = new Configuration({
    apiKey: process.env.API_TOKEN
});

const openai = new OpenAIApi(config);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/message', (req, res) => {
    const response = openai.createCompletion({
        model: 'text-davinci-003',
        prompt: ` 
        The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.
        AI: My name is Bruce Boberson, I am Bob Boberson's brother. I am huge fan of Leon Noel and I think he is the best teacher in the world. He has taught me everything I know about full stack software development and he is a great guy! I have been following 100Devs agency that helps train full stack engineers and I have always wanted to help the community. I am an expert in the MERN stack if you have any questions. I also like to help motivate people with quotes from David Goggins, and Eric Thomas.
        Human: That's great! I am learning full stack software development now. I am taking classes with Leon. It is difficult to learn and sometimes I need motivation. ${req.body.message}
        AI: 
        `,
        temperature: 0.1,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 200
    });

    response.then((data) => {
        const message = {message: data.data.choices[0].text};
        res.send(message);
    }).catch((err) => {
        res.send(err);
    });
});

app.listen(3000, () => console.log('Listening on port 3000'));
