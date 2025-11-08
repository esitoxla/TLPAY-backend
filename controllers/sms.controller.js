import axios from "axios";



// Send SMS
export const sendSms = async (req, res, next) => {
  try {
    // Send POST request to Moolre API
    const { data } = await axios.post(
      `${process.env.MOOLRE_BASE_URL}/open/sms/send`,
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          "X-API-VASKEY": process.env.X_API_VASKEY, 
        },
      }
    );

    // Send back response to client (frontend or Postman)
    res.status(200).json(data);
  } catch (err) {
    // Handle errors properly through your error middleware
    next({
      statusCode: err.response?.status || 500,
      message: "SMS sending failed",
      details: err.response?.data || err.message,
    });
  }
};
