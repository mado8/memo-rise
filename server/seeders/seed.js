const db = require('../config/connection');
const User = require('../models');
const userSeeds = require('./test.json');

db.once('open', async () => {
    await User.deleteMany({});
    await User.insertMany(userSeeds);


  console.log('all done!');
  process.exit(0);
});