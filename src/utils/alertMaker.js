const alertMaker = (data) => {
  console.trace(data);
  if (data.status) {
    return {
      status: true,
      severity: "success",
      title: "Success!",
      message: data.message,
    };
  } else {
    return {
      status: true,
      severity: "error",
      title: "Oh no! Something is wrong",
      message: data.message,
    };
  }
};

export default alertMaker;
