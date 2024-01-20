import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getMe: build.query<GetMeResponse, GetMeRequest>({
			query: () => 'auth/user',
			providesTags: ['me']
		})
	})
});
export const { useGetMeQuery } = api;
