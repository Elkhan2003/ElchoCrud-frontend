namespace CRUD {
	type GetCrudRequest = void;
	type GetCrudResponse = {
		success: boolean;
		results: Result[];
	};
	type Result = {
		id: number;
		userId: number;
		url: string;
		resource: string;
		code: any[];
		createdAt: string;
		updatedAt: string;
	};
}
