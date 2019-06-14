// require('dotenv').config();
// const { App } = require('@slack/bolt');
const http = require('http')

// Initializes your app with your bot token and signing secret
// const app = new App({
//     token: process.env.SLACK_BOT_TOKEN,
//     signingSecret: process.env.SLACK_SIGNING_SECRET
// });

// // Listens to incoming messages that contain "hello"
// app.message('hello', ({ message, say }) => {
//     // say() sends a message to the channel where the event was triggered
//     say(`Hey there <@${message.user}>!`);
// });

// (async () => {
//     // Start your app
//     await app.start(process.env.PORT || 4390);

//     console.log('⚡️ Bolt app is running!');
// })();

const PORT = 4390;

function handleRequest(request, response) {
    console.log(request);

    response.end(request);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function () {
    console.log("Server listening on: http://localhost:%s", PORT);
});

