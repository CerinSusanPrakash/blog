const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect(
    'mongodb+srv://cerin-susan:cerinsusan@clusternew.aalc9so.mongodb.net/blogDB?retryWrites=true&w=majority&appName=ClusterNew'
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
