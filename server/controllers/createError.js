const createError = ({ controller, method, type, status, err }) => {
  return {
    log: `${controller}.${method} \n${type}: ERROR ${
      typeof err === "object" ? JSON.stringify(err) : err
    }`,
    status,
    message: {
      err: `Error occured in ${controller}.${method}. Check server logs for more details.`,
    },
  };
};

module.exports = createError;
