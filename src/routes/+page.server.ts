export const load = async ({ locals }) => {
	const response = await locals.api.users.$get();
	const data = await response.json();
	return { users: data };
};
