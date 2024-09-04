/*
  Warnings:

  - You are about to drop the column `countriesId` on the `UserAddress` table. All the data in the column will be lost.
  - Added the required column `countryId` to the `UserAddress` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserAddress" DROP CONSTRAINT "UserAddress_countriesId_fkey";

-- AlterTable
ALTER TABLE "UserAddress" DROP COLUMN "countriesId",
ADD COLUMN     "countryId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "UserAddress" ADD CONSTRAINT "UserAddress_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
