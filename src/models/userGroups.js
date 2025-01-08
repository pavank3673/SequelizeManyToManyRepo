// 'use strict';
// const { Model } = require('sequelize');
// // const User = require('./user');
// // const Group = require('./group');
// module.exports = (sequelize, DataTypes) => {
//   class UserGroups extends Model {
//     static associate(models) {
//       // define association here
//     }
//   }
//   UserGroups.init(
//     {
//       userGroupId: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//       },
//       isActive: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: false
//       },
//     //   userId: {
//     //     type: DataTypes.INTEGER,
//     //     references: {
//     //       model: 'users',
//     //       key: 'userId'
//     //     }
//     //   },
//     //   groupId: {
//     //     type: DataTypes.INTEGER,
//     //     references: {
//     //         model: 'group',
//     //         key: 'groupId'
//     //     }
//     //   }
//     },
//     {
//       sequelize,
//       modelName: 'user_group',
//       timestamps: false
//     }
//   );
//   //   User.belongsToMany(Group, { through: 'user_groups' });
//   //   Group.belongsToMany(User, { through: 'user_groups' });
//   return UserGroups;
// };
