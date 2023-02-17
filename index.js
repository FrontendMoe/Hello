const express = require('express');
const ChatGPTAPI = require('chatgpt').ChatGPTAPI;
const api = new ChatGPTAPI({
	apiKey: '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',
});
const app = express();

app.get('/', async (req, res) => {
	const result = await api.sendMessage('hello');
	res.send(result);
});

app.listen(5000, () => {
	console.log('Running on port 5000.');
});

// Export the Express API
module.exports = app;
