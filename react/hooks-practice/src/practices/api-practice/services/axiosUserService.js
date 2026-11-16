import axios from "axios";

export async function getUsers() {
  const response = await axios.get("https://dummyjson.com/users");

  return response.data.users;
}

export async function createUser(userData) {
  const response = await axios.post(
    "https://dummyjson.com/users/add",
    userData,
  );

  return response.data;
}

export async function updateUser(userId, userData) {
  const response = await axios.put(
    `https://dummyjson.com/users/${userId}`,
    userData,
  );

  return response.data;
}

export async function patchUser(userId, userData) {
  const response = await axios.patch(
    `https://dummyjson.com/users/${userId}`,
    userData,
  );

  return response.data;
}

export async function deleteUser(userId) {
  const response = await axios.delete(`https://dummyjson.com/users/${userId}`);

  console.log("DELETE Status Code:", response.status);
  return response.data;
}

export async function createEmployee(employeeData) {
  const response = await axios.post(
    "https://dummyjson.com/users/add",
    employeeData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  return response;
}

export async function getEmployees(limit, skip) {
  const response = await axios.get("https://dummyjson.com/users", {
    params: {
      limit: limit,
      skip: skip,
    },
  });

  return response;
}
