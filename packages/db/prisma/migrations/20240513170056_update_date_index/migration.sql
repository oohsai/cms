-- AlterTable
ALTER TABLE "User" ALTER COLUMN "dateOfBirth" SET DATA TYPE DATE;

-- CreateIndex
CREATE INDEX "User_name_idx" ON "User"("name");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");
