import { DataProvider, fetchUtils } from "react-admin";
import axios from "axios";
const API_URL = "http://localhost:3000/api_v1";

export const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}?_page=${page}&_limit=${perPage}&_sort=${field}&_order=${order}`
    );
    console.log(
      `${API_URL}/${resource}?_page=${page}&_limit=${perPage}&_sort=${field}&_order=${order}`
    );
    console.log(`getList: ${resource}`, { data: response.json });
    return {
      data: response.json,
      total: parseInt(response.headers.get("X-Total-Count") || "", 10),
    };
  },
  getOne: async (resource, params) => {
    const response = await fetch(`${API_URL}/${resource}/${params.id}`);
    const data = await response.json();
    console.log(`getOne: ${resource}`, { data: data });
    return { data: data };
  },
  getMany: async (resource, params) => {
    const response = await fetch(`${API_URL}/${resource}/${params.ids}`);
    const data = await response.json();
    console.log(`getMany: ${resource}`, { data: [data] });
    return { data: [data] };
  },
  getManyReference: async (resource, params) => {
    const response = await fetch(`${API_URL}/${resource}/${params.target}`);
    const data = await response.json();
    console.log(`getManyReference: ${resource}`, { data: [data] });
    return { data: [data] };
  },
  update: async (resource, params) => {
    console.log(params);
    const response = await axios.put(
      `${API_URL}/${resource}/${params.id}`,
      params.data
    );
    console.log(`update: ${resource}`, { data: response.data });
    return { data: response.data };
  },
  updateMany: async (resource, params) => {
    const response = await fetch(`${API_URL}/${resource}/${params.ids}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    const data = await response.json();
    console.log(`updateMany: ${resource}`, { data: [data] });
    return { data: [data] };
  },
  create: async (resource, params) => {
    const response = await axios.post(`${API_URL}/${resource}`, params.data);
    console.log(`create: ${resource}`, { data: response.data });
    return { data: response.data };
  },
  delete: async (resource, params) => {
    const response = await fetch(`${API_URL}/${resource}/${params.id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(`delete: ${resource}`, { data: data });

    return { data: data };
  },
  deleteMany: async (resource, params) => {
    const response = await fetch(`${API_URL}/${resource}/${params.ids}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(`deleteMany: ${resource}`, { data: [data] });
    return { data: [data] };
  },
};
