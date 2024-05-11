const usersModel = require("../model/Users");
exports.getUser = async (ctx) => {
  try {
    const { id } = ctx.params;
    const user = await usersModel.getUser(id);
    ctx.body = { statuscode: "user founded", user: user };
  } catch (error) {
    console.log("error: ", error);
  }
};
exports.createUser = async (ctx) => {
  try {
    const { id, name } = ctx.request.body;
    const data = await usersModel.createUser(id, name);
    ctx.body = { data, message: "user created successfully" };
  } catch (error) {
    console.log("error: ", error);
  }
};

exports.removeUser = async (ctx) => {
  try {
    const { id } = ctx.params;
    const data = await usersModel.removeUser(parseInt(id));
    ctx.body = { data, message: "Deleted Successfully." };
  } catch (error) {
    console.log("error: ", error);
  }
};
