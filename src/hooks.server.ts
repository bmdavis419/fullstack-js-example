import type { AppType } from '$lib/api';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { hc } from 'hono/client';

const apiClient: Handle = async ({ event, resolve }) => {
	// since hono's typesafe client is just a wrapper around fetch, we can use sveltekits' as a drop-in replacement for the default fetch
	const { api } = hc<AppType>('/', { fetch: event.fetch });
	event.locals.api = api;

	const response = await resolve(event);
	return response;
};

export const handle = sequence(apiClient);
