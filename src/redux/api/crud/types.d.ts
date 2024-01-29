namespace CRUD {
	type GetCrudRequest = void;
	type GetCrudResponse = {
		success: boolean;
		results: Results[];
	};

	type CreateCrudResponse = {
		success: true;
		data: {
			success: boolean;
			results: Results[];
		};
	};

	type DeleteCrudResponse = {
		success: true;
		data: {
			success: boolean;
			results: Results[];
		};
	};

	type DeleteAllCrudRequest = void;

	type DeleteAllCrudResponse = {
		success: true;
		data: {
			success: boolean;
			results: Object;
		};
	};

	type Results = {
		id: number;
		userId: number;
		url: string;
		resource: string;
		code: any[];
		createdAt: string;
		updatedAt: string;
	};
}
