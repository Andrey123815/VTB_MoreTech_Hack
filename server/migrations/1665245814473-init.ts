import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1665245814473 implements MigrationInterface {
  name = 'init1665245814473';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "teams" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "imageSrc" character varying NOT NULL, CONSTRAINT "PK_7e5523774a38b08a6236d322403" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."users_tasks_completionstatus_enum" AS ENUM('done', 'in_progress')`,
    );
    await queryRunner.query(
      `CREATE TABLE "users_tasks" ("id" character varying NOT NULL, "userId" integer NOT NULL, "taskId" integer NOT NULL, "completionStatus" "public"."users_tasks_completionstatus_enum" NOT NULL DEFAULT 'in_progress', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "doneAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ee7aa71bbf9ca313147a17b4fea" PRIMARY KEY ("id", "userId", "taskId"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."tasks_creationstatus_enum" AS ENUM('created', 'in_moderation', 'rejected')`,
    );
    await queryRunner.query(
      `CREATE TABLE "tasks" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "rewardCoins" integer NOT NULL, "featureId" integer NOT NULL, "rewardFeature" integer NOT NULL, "creationStatus" "public"."tasks_creationstatus_enum" NOT NULL DEFAULT 'in_moderation', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "creatorId" integer, CONSTRAINT "UQ_067be4bd67747aa64451933929e" UNIQUE ("title"), CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "features" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "imageSrc" character varying NOT NULL, CONSTRAINT "PK_5c1e336df2f4a7051e5bf08a941" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "users_features" ("userId" integer NOT NULL, "featureId" integer NOT NULL, "score" double precision NOT NULL DEFAULT '10', CONSTRAINT "PK_68b9f8a8b3e1352d080304ba14c" PRIMARY KEY ("userId", "featureId"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "wallets" ("id" SERIAL NOT NULL, "privtaeKey" character varying NOT NULL, "publicKey" character varying NOT NULL, "maticAmount" double precision NOT NULL DEFAULT '0', "rubleAmount" double precision NOT NULL DEFAULT '0', CONSTRAINT "PK_8402e5df5a30a229380e83e4f7e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."users_role_enum" AS ENUM('admin', 'teamlead', 'member')`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "login" character varying NOT NULL, "password" character varying NOT NULL, "fullName" character varying NOT NULL, "specialization" character varying NOT NULL, "grade" character varying NOT NULL, "role" "public"."users_role_enum" NOT NULL DEFAULT 'member', "teamId" integer NOT NULL, "avatarSrc" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "mainWalletId" integer, "listedWalletId" integer, CONSTRAINT "UQ_2d443082eccd5198f95f2a36e2c" UNIQUE ("login"), CONSTRAINT "REL_d06193a9b81d97c048921b8b5f" UNIQUE ("mainWalletId"), CONSTRAINT "REL_0e2c02bb8b7b6fb94ac1865441" UNIQUE ("listedWalletId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "tasks_features_features" ("tasksId" integer NOT NULL, "featuresId" integer NOT NULL, CONSTRAINT "PK_d9e4f1990b2c436804e90654481" PRIMARY KEY ("tasksId", "featuresId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_646e4209e2fb496ca70d0c0105" ON "tasks_features_features" ("tasksId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_621fee58ebc178067832c4a86d" ON "tasks_features_features" ("featuresId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "users_tasks" ADD CONSTRAINT "FK_00a341213b167051795488033ce" FOREIGN KEY ("taskId") REFERENCES "tasks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_tasks" ADD CONSTRAINT "FK_a56072ec70d712d5716f214c17a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "tasks" ADD CONSTRAINT "FK_90bc62e96b48a437a78593f78f0" FOREIGN KEY ("creatorId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_features" ADD CONSTRAINT "FK_626a1cdfabf1808368e30deb03e" FOREIGN KEY ("featureId") REFERENCES "features"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_features" ADD CONSTRAINT "FK_3542d4ca03151a45d1e5398c0a0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_d1803064187c8f38e57a9c4984c" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_d06193a9b81d97c048921b8b5f7" FOREIGN KEY ("mainWalletId") REFERENCES "wallets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_0e2c02bb8b7b6fb94ac1865441d" FOREIGN KEY ("listedWalletId") REFERENCES "wallets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "tasks_features_features" ADD CONSTRAINT "FK_646e4209e2fb496ca70d0c01058" FOREIGN KEY ("tasksId") REFERENCES "tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "tasks_features_features" ADD CONSTRAINT "FK_621fee58ebc178067832c4a86d9" FOREIGN KEY ("featuresId") REFERENCES "features"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tasks_features_features" DROP CONSTRAINT "FK_621fee58ebc178067832c4a86d9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tasks_features_features" DROP CONSTRAINT "FK_646e4209e2fb496ca70d0c01058"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_0e2c02bb8b7b6fb94ac1865441d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_d06193a9b81d97c048921b8b5f7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_d1803064187c8f38e57a9c4984c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_features" DROP CONSTRAINT "FK_3542d4ca03151a45d1e5398c0a0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_features" DROP CONSTRAINT "FK_626a1cdfabf1808368e30deb03e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tasks" DROP CONSTRAINT "FK_90bc62e96b48a437a78593f78f0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_tasks" DROP CONSTRAINT "FK_a56072ec70d712d5716f214c17a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_tasks" DROP CONSTRAINT "FK_00a341213b167051795488033ce"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_621fee58ebc178067832c4a86d"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_646e4209e2fb496ca70d0c0105"`,
    );
    await queryRunner.query(`DROP TABLE "tasks_features_features"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
    await queryRunner.query(`DROP TABLE "wallets"`);
    await queryRunner.query(`DROP TABLE "users_features"`);
    await queryRunner.query(`DROP TABLE "features"`);
    await queryRunner.query(`DROP TABLE "tasks"`);
    await queryRunner.query(`DROP TYPE "public"."tasks_creationstatus_enum"`);
    await queryRunner.query(`DROP TABLE "users_tasks"`);
    await queryRunner.query(
      `DROP TYPE "public"."users_tasks_completionstatus_enum"`,
    );
    await queryRunner.query(`DROP TABLE "teams"`);
  }
}
