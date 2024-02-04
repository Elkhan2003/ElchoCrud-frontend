import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getRating: build.query<GetRatingResponse, GetRatingRequest>({
			query: () => ({
				url: '/rating/get',
				method: 'GET'
			}),
			providesTags: ['rating']
		})
	})
});
export const { useGetRatingQuery } = api;
