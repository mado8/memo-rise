const db = require('../config/connection');
const { Memory, Question, User } = require('../models');
const memorySeeds = require('./Memory.json');
const questionSeeds = require('./Question.json');
const userSeeds = require('./User.json');

db.once('open', async () => {
  await Memory.deleteMany({});
    await Memory.create(memorySeeds);
    await Question.deleteMany({});
    await Question.create(questionSeeds);
    await User.deleteMany({});
    await User.create(userSeeds);

  console.log('all done!');
  process.exit(0);
});
