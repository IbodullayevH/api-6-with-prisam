-- CreateTable
CREATE TABLE "categorys" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "categorys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phones" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "price" INTEGER,
    "descripton" TEXT,
    "category_id" INTEGER,

    CONSTRAINT "phones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT,
    "email" TEXT,
    "password" TEXT,
    "username" TEXT,
    "phonenumber" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_img" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER,
    "imglink" TEXT,

    CONSTRAINT "users_img_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "productname" TEXT NOT NULL,
    "productprice" TEXT NOT NULL,
    "productdesc" TEXT NOT NULL,
    "productbestbefore" TEXT NOT NULL,
    "countriesId" INTEGER,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "countries" (
    "id" SERIAL NOT NULL,
    "countriename" TEXT NOT NULL,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "phones" ADD CONSTRAINT "phones_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categorys"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users_img" ADD CONSTRAINT "users_img_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_countriesId_fkey" FOREIGN KEY ("countriesId") REFERENCES "countries"("id") ON DELETE SET NULL ON UPDATE CASCADE;
