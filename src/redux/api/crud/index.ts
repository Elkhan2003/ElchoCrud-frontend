import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getAllUserCrud: build.query<CRUD.GetCrudResponse, CRUD.GetCrudRequest>({
			query: () => ({
				url: 'get/all',
				method: 'GET'
			}),
			providesTags: ['crud']
		})
	})
});
export const { useGetAllUserCrudQuery } = api;
