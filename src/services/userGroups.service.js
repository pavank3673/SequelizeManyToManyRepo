import { QueryTypes } from 'sequelize';
import sequelize, { DataTypes } from '../config/database';

export const getUserGroupByUser = async (userId) => {
  const data = await sequelize.query(
    'SELECT "users"."userId", "users"."firstName", "users"."lastName", "users"."email", "users"."password", "users"."createdAt", "users"."updatedAt", JSON_AGG( JSON_BUILD_OBJECT( \'groupId\',"groups"."groupId", \'groupName\', "groups"."groupName", \'isActive\', "groups"."isActive", \'createdAt\', "groups"."createdAt", \'updatedAt\', "groups"."updatedAt", \'userGroupId\',"user_groups"."userGroupId")) FILTER ( WHERE "groups"."groupId" IS NOT NULL )  AS "groups" FROM "users" LEFT OUTER JOIN ( "user_groups" INNER JOIN "groups" ON "groups"."groupId" = "user_groups"."groupGroupId" ) ON "users"."userId" = "user_groups"."userUserId" WHERE "users"."userId" = :userId GROUP BY "users"."userId", "users"."firstName", "users"."lastName", "users"."email", "users"."password", "users"."createdAt", "users"."updatedAt";',
    {
      replacements: {
        userId: userId
      },
      type: QueryTypes.SELECT
    }
  );
  return data;
};
