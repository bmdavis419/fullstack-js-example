import { Hono } from 'hono';
import { users } from '../example-data';

export const userRouter = new Hono().get('/', (c) => c.json(users));
