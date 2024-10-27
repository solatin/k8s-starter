import express from 'express';
import usersRouter from './routes/users';

export function createApp() {
	const app = express();

	app.use('/api/users', usersRouter);
	app.get('/', (req, res) => {
		res.send('Hello');
	});

	return app;
}
