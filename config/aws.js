const AWS = require("aws-sdk");
AWS.config.update({
  accessKeyId: "cdp",
  secretAccessKey: "123456",
  endpoint: "http://localhost:8000",
  region: "us-east-1",
});
var docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });

module.exports = docClient;
