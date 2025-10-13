/*
  Warnings:

  - Changed the type of `user1` on the `UserRelation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `user2` on the `UserRelation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "UserRelation" DROP COLUMN "user1",
ADD COLUMN     "user1" INTEGER NOT NULL,
DROP COLUMN "user2",
ADD COLUMN     "user2" INTEGER NOT NULL;
