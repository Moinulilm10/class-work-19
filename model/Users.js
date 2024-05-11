const docClient = require("../config/aws");

const getUser = async (id) => {
  const params = {
    TableName: "users",
    Key: {
      id: id,
    },
  };

  try {
    const data = await docClient.get(params).promise();
    console.log("User details:", data.Item);
    return data.Item;
  } catch (error) {
    console.error("Got problem getting user data:", error);
    throw error;
  }
};

const createUser = async (id, name) => {
  const params = {
    TableName: "users",
    Item: {
      id: id,
      name: name,
    },
  };

  try {
    const data = await docClient.put(params).promise();
    console.log("user created successfully:", data);
    return data;
  } catch (error) {
    console.error("got problem creating user:", error);
    throw error;
  }
};

const removeUser = async (id) => {
  const params = {
    TableName: "users",
    Key: {
      id: id,
    },
  };

  try {
    const data = await docClient.delete(params).promise();
    console.log("user deleted successfully:", data);
    return data;
  } catch (error) {
    console.error("got problem deleting user:", error);
    throw error;
  }
};

module.exports = { getUser, createUser, removeUser };
