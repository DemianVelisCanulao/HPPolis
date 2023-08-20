-- CreateTable
CREATE TABLE "Guests" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "is_coming" BOOLEAN NOT NULL,
    "date_confirmation" TIMESTAMP(3) NOT NULL,
    "invitados" INTEGER NOT NULL,

    CONSTRAINT "Guests_pkey" PRIMARY KEY ("id")
);
