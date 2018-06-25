// const casual = require('casual');
// const _ = require('lodash');
// const Sequelize = require('sequelize');
import casual from 'casual';
import _ from 'lodash';
import Sequelize from 'sequelize';
import Mongoose from 'mongoose';

Mongoose.Promise = global.Promise;

const mongo = Mongoose.connect('mongodb://localhost/account', {
  // useMongoClient: true
})

const AccountSchema = Mongoose.Schema({
  email: String,
  password: String,
})

const MongoAccount = Mongoose.model('account', AccountSchema)

const db = new Sequelize('blog', null, null, {
  dialect: 'sqlite',
  storage: './blog.sqlite',
})

const UserModel = db.define('usr', {
  name: { type: Sequelize.STRING },
  age: { type: Sequelize.STRING }
})

casual.seed(123);

db.sync({ force: true }).then(() => {
  _.times(10, () => {
    // sql insert
    return UserModel.create({
      name: casual.name,
      age: casual.building_number,
    }).then(() => {
      // mongo insert
      return MongoAccount.create({
        email: casual.email,
        password: casual.password,
      })
    })
  })
})

const SqlUser = db.models.usr;

// module.exports = { User: User };
export { SqlUser, MongoAccount }
