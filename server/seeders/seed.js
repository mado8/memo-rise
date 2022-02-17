const db = require('../config/connection');
const User = require('../models');
// const userSeeds = require('./test.json');

const memoryData = require('./memoryData.json');
const userData = require('./userData.json');
const questionData = require('./questionData.json');


db.once('open', async () => {
  // clean database
  await user.deleteMany({});
  await memory.deleteMany({});
  await question.deleteMany({});

  // bulk create each model
  const user = await User.insertMany(schoolData);
  const memory = await Memory.insertMany(classData);
  const question = await Question.insertMany(professorData);

  for (newMemory of users) {
  
    const tempUser = user[user.length-1];
    tempUser.push(newUser._id);
    await tempUser.save();

    
    const tempMemory = memory[memory-1];
    newMemory.memory = tempMemory._id;
    await newClass.save();


    tempMemory.question.push(newMemory._id);
    await tempMemory.save();
  }
}
);


// db.once('open', async () => {
//     await User.deleteMany({});
//     await User.insertMany(userSeeds);


//   console.log('all done!');
//   process.exit(0);
// });