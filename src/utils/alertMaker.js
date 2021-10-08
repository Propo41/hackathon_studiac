const alertMaker = (data) => {
  if (data.status) {
    return {
      severity: "success",
      title: "Success!",
      message: data.message,
    };
  } else {
    return {
      severity: "error",
      title: "Oh no! Something is wrong",
      message: data.message,
    };
  }
};

export default alertMaker;
