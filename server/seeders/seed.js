const db = require('../config/connection');
const { User, Report } = require('../models');
const userSeeds = require('./userSeeds.json');
const reportSeeds = require('./reportSeeds.json');

db.once('open', async () => {
  try {
    await Report.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < reportSeeds.length; i++) {
      const { _id, reportAuthor } = await Report.create(reportSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: reportAuthor },
        {
          $addToSet: {
            reports: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
