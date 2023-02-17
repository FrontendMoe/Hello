import Express from 'express';
import { ChatGPTAPI } from 'chatgpt';
const api = new ChatGPTAPI({
	apiKey: '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',
});
const app = Express();

app.get('/', async (req, res) => {
	const result = await api.sendMessage('hello');
	res.send(result + 'hhhh');
});

app.listen(5000, () => {
	console.log('Running on port 5000.');
});
