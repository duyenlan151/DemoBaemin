import request from "../utils/request";

export const categoryService = {
    getAll,
    getById,
};

function getAll() {
    return request("/users");
}

function getById(id) {
    return request(`/users/${id}`);
}