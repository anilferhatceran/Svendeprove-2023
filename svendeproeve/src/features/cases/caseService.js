import axios from "axios";

const API_URL = "http://localhost:5000/api/cases/";

// Create new case
const createCase = async (caseData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, caseData, config);

  return response.data;
};

// Delete user case
const deleteCase = async (caseId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + caseId, config);

  return response.data;
};

// Get user cases
const getUserCases = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);

  return response.data;
};

// Get all cases

const getAllCases = async () => {
  const response = await axios.get(API_URL + "all/");
  console.log("I'm getting cases");
  return response.data;
};

const caseService = {
  createCase,
  getUserCases,
  getAllCases,
  deleteCase,
};

export default caseService;
