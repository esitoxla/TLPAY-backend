import axios from "axios";

const { MOOLRE_BASE_URL, MOOLRE_API_USERNAME, MOOLRE_PRIVATE_KEY } = process.env;

// Validate Name
export const validateName = async (req, res, next) => {
  try {
    const response = await axios.post(
      `${MOOLRE_BASE_URL}/open/transact/validate`,
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          "X-API-USER": MOOLRE_API_USERNAME,
          "X-API-KEY": MOOLRE_PRIVATE_KEY, // Private key here
        },
      }
    );
    res.json(response.data);
  } catch (err) {
    next({
      statusCode: err.response?.status || 500,
      message: "Validation failed",
      details: err.response?.data || err.message,
    });
  }
};

// Initiate Transfer
export const initiateTransfer = async (req, res, next) => {
  try {
    const response = await axios.post(
      `${MOOLRE_BASE_URL}/open/transact/transfer`,
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          "X-API-USER": MOOLRE_API_USERNAME,
          "X-API-KEY": MOOLRE_PRIVATE_KEY, 
        },
      }
    );
    res.json(response.data);
  } catch (err) {
    next({
      statusCode: err.response?.status || 500,
      message: "Transfer initiation failed",
      details: err.response?.data || err.message,
    });
  }
};

// Check Transfer Status
export const checkTransferStatus = async (req, res, next) => {
  try {
    const response = await axios.post(
      `${MOOLRE_BASE_URL}/open/transact/status`,
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          "X-API-USER": MOOLRE_API_USERNAME,
          "X-API-KEY": MOOLRE_PRIVATE_KEY, 
        },
      }
    );
    res.json(response.data);
  } catch (err) {
    next({
      statusCode: err.response?.status || 500,
      message: "Status check failed",
      details: err.response?.data || err.message,
    });
  }
};
