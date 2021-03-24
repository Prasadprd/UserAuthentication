const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/Authenticate", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(() => {
    console.log("connected to database");
  })
  .catch((e) => {
    console.log("can not connect to database");
});