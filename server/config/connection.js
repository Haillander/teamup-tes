const { connect, connection } = require("mongoose");

// After you create your Heroku application, visit https://dashboard.heroku.com/apps/ select the application name and add your Atlas connection string as a Config Var
// Node will look for this environment variable and if it exists, it will use it. Otherwise, it will assume that you are running this application locally
const connectionString =
  process.env.MONGODB_URI ||
  "mongodb+srv://teampup:teampup@cluster0.bwzmniy.mongodb.net/teampup?retryWrites=true&w=majority";
console.log(process.env.MONGODB_URI);
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((connection) => {
    console.log("Connected to db");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = connection;
