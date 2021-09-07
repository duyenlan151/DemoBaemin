import { ICategory } from "@models/category.model";
import request from "@utils/request";

const getAll = (): Promise<ICategory[]>  => request("/users");

const getById =  (id: string): Promise<ICategory> =>  request(`/users/${id}`);

const categoryService = {
    getAll,
    getById,
};

export default categoryService;

