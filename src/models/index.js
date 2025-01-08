const { default: sequelize, DataTypes } = require('../config/database');

const User = sequelize.define('user', {
  userId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING
});

const Group = sequelize.define('group', {
  groupId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  groupName: DataTypes.STRING,
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

const UserGroups = sequelize.define(
  'user_group',
  {
    userGroupId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    timestamps: false
  }
);

User.belongsToMany(Group, { through: UserGroups });
Group.belongsToMany(User, { through: UserGroups });

module.exports = {
  User,
  Group,
  UserGroups
};
