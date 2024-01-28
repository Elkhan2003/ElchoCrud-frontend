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
		createUserCrud: builder.mutation<
			CRUD.CreateCrudResponse,
			{
				resource: string;
			}
		>({
			query: ({ resource }) => ({
				url: '/crud/profile/create',
				method: 'POST',
				body: { resource }
			}),
			invalidatesTags: ['crud']
		}),
		deleteUserCrud: builder.mutation<
			CRUD.DeleteCrudResponse,
			{
				id: string | number;
			}
		>({
			query: ({ id }) => ({
				url: `/crud/profile/delete/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['crud']
		})
	})
});
export const {
	useGetAllUserCrudQuery,
	useCreateUserCrudMutation,
	useDeleteUserCrudMutation
} = api;
