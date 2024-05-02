const mongoose = require('mongoose');


module.exports = async (globalConfig) => {
    await mongoose.disconnect();
    global.testServer.close();
  };
  