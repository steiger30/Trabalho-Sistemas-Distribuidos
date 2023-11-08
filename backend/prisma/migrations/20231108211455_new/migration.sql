/*
  Warnings:

  - You are about to drop the column `name_Customer` on the `orders` table. All the data in the column will be lost.
  - Added the required column `nameCustomer` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "name_Customer",
ADD COLUMN     "nameCustomer" TEXT NOT NULL;
