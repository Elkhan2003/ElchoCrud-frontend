import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (builder) => ({
		getAllUserCrud: builder.query<CRUD.GetCrudResponse, CRUD.GetCrudRequest>({
			query: () => ({
				url: '/crud/profile/get/all',
				method: 'GET'
			}),
			providesTags: ['crud']
		}),
		createUserCrud: builder.mutation({
			query: () => ({
				url: '/crud/profile/create',
				method: 'POST'
			}),
			invalidatesTags: ['crud']
		})
	})
});
export const { useGetAllUserCrudQuery, useCreateUserCrudMutation } = api;
