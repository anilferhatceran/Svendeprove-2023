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
const getCases = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);

  return response.data;
};

const caseService = {
  createCase,
  getCases,
  deleteCase,
};

export default caseService;
