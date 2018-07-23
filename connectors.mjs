import casual from 'casual';
import _ from 'lodash';
import Sequelize from 'sequelize';
import Mongoose from 'mongoose';

Mongoose.Promise = global.Promise;

const mongo = Mongoose.connect('mongodb://mongodb/account', {
  // useMongoClient: true
})

const AccountSchema = Mongoose.Schema({
  id: Number,
  email: String,
  password: String,
})

const MongoAccount = Mongoose.model('account', AccountSchema)

const db = new Sequelize('blog', null, null, {
  dialect: 'sqlite',
  storage: './blog.sqlite',
})

const UserModel = db.define('usr', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  name: { type: Sequelize.STRING },
  age: { type: Sequelize.STRING }
})

casual.seed(123);

db.sync({ force: true }).then(() => {
  let i = 0;
  let j = 0;
  _.times(10, () => {
    // sql insert
    return UserModel.create({
      id: i++,
      name: casual.name,
      age: casual.building_number,
    }).then(() => {
      // mongo insert
      return MongoAccount.create({
        id: j++,
        email: casual.email,
        password: casual.password,
      })
    })
  })
})

const SqlUser = db.models.usr;

// module.exports = { User: User };
export { SqlUser, MongoAccount }
