const db = require('../config/connection');
const { User , Memory, Question} = require('../models');
// const userSeeds = require('./test.json');

const memoryData = require('./memory.json');
const userData = require('./userdata.json');
const questionData = require('./question.json');


db.once('open', async () => {
  // clean database
  await User.deleteMany({});
  await Memory.deleteMany({});
  await Question.deleteMany({});

  // bulk create each model
  const user = await User.create(userData);
  const memory = await Memory.insertMany(memoryData);
  const question = await Question.insertMany(questionData);

// bulkCreate
  
console.log('all done!');
process.exit(0);
}
);



// resolver (context/model)
// test them in graphql
// show auth middleware
// seeds working with our model
// login
// at the end if we get time pwa

// create user manually seeds isnt bcrpty to add users