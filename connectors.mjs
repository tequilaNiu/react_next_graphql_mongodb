// const casual = require('casual');
// const _ = require('lodash');
// const Sequelize = require('sequelize');
import casual from 'casual';
import _ from 'lodash';
import Sequelize from 'sequelize';

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
    return UserModel.create({
      name: casual.name,
      age: casual.building_number,
    })
  })
})

const User = db.models.usr;

// module.exports = { User: User };
export { User }
