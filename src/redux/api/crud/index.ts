import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (builder) => ({
		getAllUserCrud: builder.query<CRUD.GetCrudResponse, CRUD.GetCrudRequest>({
			query: () => ({
				url: '/crud/profile/getAll',
				method: 'GET'
			}),
			providesTags: ['crud']
		}),
		getAllUserDashboardCrud: builder.query<
			CRUD.GetCrudResponse,
			CRUD.GetCrudRequest
		>({
			query: () => ({
				url: '/crud/profile/getAllDashboard',
				method: 'GET'
			}),
			providesTags: ['crud']
		}),
		getAllUserTrashCrud: builder.query<
			CRUD.GetCrudResponse,
			CRUD.GetCrudRequest
		>({
			query: () => ({
				url: '/crud/profile/getAllTrash',
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
		trashUserCrud: builder.mutation<
			CRUD.DeleteCrudResponse,
			{
				id: string | number;
			}
		>({
			query: ({ id }) => ({
				url: `/crud/profile/trash/${id}`,
				method: 'PATCH'
			}),
			invalidatesTags: ['crud']
		}),
		trashAllUserCrud: builder.mutation<
			CRUD.DeleteAllCrudResponse,
			CRUD.DeleteAllCrudRequest
		>({
			query: () => ({
				url: 'crud/profile/trashAll',
				method: 'PATCH'
			}),
			invalidatesTags: ['crud']
		}),
		recoveryUserCrud: builder.mutation<
			CRUD.DeleteCrudResponse,
			{
				id: string | number;
			}
		>({
			query: ({ id }) => ({
				url: `/crud/profile/recovery/${id}`,
				method: 'PATCH'
			}),
			invalidatesTags: ['crud']
		}),
		recoveryAllUserCrud: builder.mutation<
			CRUD.DeleteAllCrudResponse,
			CRUD.DeleteAllCrudRequest
		>({
			query: () => ({
				url: 'crud/profile/recoveryAll',
				method: 'PATCH'
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
		}),
		deleteAllUserCrud: builder.mutation<
			CRUD.DeleteAllCrudResponse,
			CRUD.DeleteAllCrudRequest
		>({
			query: () => ({
				url: 'crud/profile/deleteAll',
				method: 'DELETE'
			}),
			invalidatesTags: ['crud']
		})
	})
});
export const {
	useGetAllUserCrudQuery,
	useGetAllUserDashboardCrudQuery,
	useGetAllUserTrashCrudQuery,
	useCreateUserCrudMutation,
	useTrashUserCrudMutation,
	useTrashAllUserCrudMutation,
	useRecoveryUserCrudMutation,
	useRecoveryAllUserCrudMutation,
	useDeleteUserCrudMutation,
	useDeleteAllUserCrudMutation
} = api;
