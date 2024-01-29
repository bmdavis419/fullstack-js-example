import { Hono } from 'hono';
import { userRouter } from './modules/users.controller';
import { hc } from 'hono/client';

/* -------------------------------------------------------------------------- */
/*                                     App                                    */
/* -------------------------------------------------------------------------- */
const app = new Hono().basePath('/api');

/* -------------------------------------------------------------------------- */
/*                                   Routes                                   */
/* -------------------------------------------------------------------------- */
app.get('/', (c) => c.json({ message: 'Hello World!' }));
const routes = app.route('/users', userRouter);

/* -------------------------------------------------------------------------- */
/*                                   Exports                                  */
/* -------------------------------------------------------------------------- */
export default app;
export type AppType = typeof routes;

export const client = hc<AppType>('/');
export type ClientType = typeof client;
