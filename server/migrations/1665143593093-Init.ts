import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1665143593093 implements MigrationInterface {
    name = 'Init1665143593093'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."users_tasks_completionstatus_enum" AS ENUM('done', 'in_progress')`);
        await queryRunner.query(`CREATE TABLE "users_tasks" ("id" character varying NOT NULL, "userId" integer NOT NULL, "taskId" integer NOT NULL, "completionStatus" "public"."users_tasks_completionstatus_enum" NOT NULL DEFAULT 'in_progress', CONSTRAINT "PK_ee7aa71bbf9ca313147a17b4fea" PRIMARY KEY ("id", "userId", "taskId"))`);
        await queryRunner.query(`CREATE TYPE "public"."tasks_creationstatus_enum" AS ENUM('created', 'in_moderation', 'rejected')`);
        await queryRunner.query(`CREATE TABLE "tasks" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "rewardCoins" integer NOT NULL, "featureId" integer NOT NULL, "rewardFeature" integer NOT NULL, "creationStatus" "public"."tasks_creationstatus_enum" NOT NULL DEFAULT 'in_moderation', CONSTRAINT "UQ_067be4bd67747aa64451933929e" UNIQUE ("title"), CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "features" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_5c1e336df2f4a7051e5bf08a941" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_features" ("userId" integer NOT NULL, "featureId" integer NOT NULL, "score" integer NOT NULL, CONSTRAINT "PK_68b9f8a8b3e1352d080304ba14c" PRIMARY KEY ("userId", "featureId"))`);
        await queryRunner.query(`CREATE TABLE "teams" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_7e5523774a38b08a6236d322403" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('admin', 'teamlead', 'member')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "login" character varying NOT NULL, "password" character varying NOT NULL, "fullName" character varying NOT NULL, "specialization" character varying NOT NULL, "grade" character varying NOT NULL, "role" "public"."users_role_enum" NOT NULL DEFAULT 'member', "coinsAmount" integer NOT NULL DEFAULT '0', "listedCoinsAmount" integer NOT NULL DEFAULT '100', "avatarSrc" character varying NOT NULL, "teamId" integer, CONSTRAINT "UQ_2d443082eccd5198f95f2a36e2c" UNIQUE ("login"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tasks_features_features" ("tasksId" integer NOT NULL, "featuresId" integer NOT NULL, CONSTRAINT "PK_d9e4f1990b2c436804e90654481" PRIMARY KEY ("tasksId", "featuresId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_646e4209e2fb496ca70d0c0105" ON "tasks_features_features" ("tasksId") `);
        await queryRunner.query(`CREATE INDEX "IDX_621fee58ebc178067832c4a86d" ON "tasks_features_features" ("featuresId") `);
        await queryRunner.query(`ALTER TABLE "users_tasks" ADD CONSTRAINT "FK_00a341213b167051795488033ce" FOREIGN KEY ("taskId") REFERENCES "tasks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_tasks" ADD CONSTRAINT "FK_a56072ec70d712d5716f214c17a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_features" ADD CONSTRAINT "FK_626a1cdfabf1808368e30deb03e" FOREIGN KEY ("featureId") REFERENCES "features"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_features" ADD CONSTRAINT "FK_3542d4ca03151a45d1e5398c0a0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_d1803064187c8f38e57a9c4984c" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tasks_features_features" ADD CONSTRAINT "FK_646e4209e2fb496ca70d0c01058" FOREIGN KEY ("tasksId") REFERENCES "tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "tasks_features_features" ADD CONSTRAINT "FK_621fee58ebc178067832c4a86d9" FOREIGN KEY ("featuresId") REFERENCES "features"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks_features_features" DROP CONSTRAINT "FK_621fee58ebc178067832c4a86d9"`);
        await queryRunner.query(`ALTER TABLE "tasks_features_features" DROP CONSTRAINT "FK_646e4209e2fb496ca70d0c01058"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_d1803064187c8f38e57a9c4984c"`);
        await queryRunner.query(`ALTER TABLE "users_features" DROP CONSTRAINT "FK_3542d4ca03151a45d1e5398c0a0"`);
        await queryRunner.query(`ALTER TABLE "users_features" DROP CONSTRAINT "FK_626a1cdfabf1808368e30deb03e"`);
        await queryRunner.query(`ALTER TABLE "users_tasks" DROP CONSTRAINT "FK_a56072ec70d712d5716f214c17a"`);
        await queryRunner.query(`ALTER TABLE "users_tasks" DROP CONSTRAINT "FK_00a341213b167051795488033ce"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_621fee58ebc178067832c4a86d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_646e4209e2fb496ca70d0c0105"`);
        await queryRunner.query(`DROP TABLE "tasks_features_features"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
        await queryRunner.query(`DROP TABLE "teams"`);
        await queryRunner.query(`DROP TABLE "users_features"`);
        await queryRunner.query(`DROP TABLE "features"`);
        await queryRunner.query(`DROP TABLE "tasks"`);
        await queryRunner.query(`DROP TYPE "public"."tasks_creationstatus_enum"`);
        await queryRunner.query(`DROP TABLE "users_tasks"`);
        await queryRunner.query(`DROP TYPE "public"."users_tasks_completionstatus_enum"`);
    }

}
