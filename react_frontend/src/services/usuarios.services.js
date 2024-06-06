import axios from "axios";
import { API_URL } from "../constants/constants";

const getAll = async () => {
    try {
        const response = await axios.get(`${API_URL}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error.response.data)
        return error.response.data
    }
}

const getByFilters = async (data) => {
    try {
        const response = await axios.get(`${API_URL}/getUsers/byFilters?nombre=${data.nombre}&apellido=${data.apellido}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error.response.data)
        return error.response.data
    }
}

const getById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error.response.data)
        return error.response.data
    }
}

const update = async (id, data) => {
    try {
        const response = await axios.put(`${API_URL}/modificar?id=${id}`, data);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error.response.data)
        return error.response.data
    }
}

const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/usuarioABorrar?id=${id}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error.response.data)
        return error.response.data
    }
}

const create = async (data) => {
    try {
        const response = await axios.post(`${API_URL}`, data);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error.response.data)
        return error.response.data
    }
}

const usuariosServices = {
    getAll,
    getByFilters,
    getById,
    update,
    deleteUser,
    create
}

export { usuariosServices }