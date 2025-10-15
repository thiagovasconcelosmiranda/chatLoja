/*
  Warnings:

  - You are about to drop the column `conversation` on the `Conversation` table. All the data in the column will be lost.
  - Added the required column `message` to the `Conversation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Conversation" DROP COLUMN "conversation",
ADD COLUMN     "message" TEXT NOT NULL;
