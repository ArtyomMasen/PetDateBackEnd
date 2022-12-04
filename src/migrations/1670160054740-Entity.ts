import { MigrationInterface, QueryRunner } from "typeorm";

export class Entity1670160054740 implements MigrationInterface {
    name = 'Entity1670160054740'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "breed" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_d1c857f060076296ce8a87b9043" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "kind_of_animal" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_8092fb0aa072f1b040a927357e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "is_verified" boolean NOT NULL, "username" character varying NOT NULL, "name" character varying NOT NULL, "surname" character varying NOT NULL, "interests" character varying NOT NULL, "notifications" boolean NOT NULL, "is_online" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pet" ("id" SERIAL NOT NULL, "breed_certificate" character varying, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" integer, CONSTRAINT "PK_b1ac2e88e89b9480e0c5b53fa60" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "gender" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_98a711129bc073e6312d08364e8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_64704296b7bd17e90ca0a620a98" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_64704296b7bd17e90ca0a620a98"`);
        await queryRunner.query(`DROP TABLE "gender"`);
        await queryRunner.query(`DROP TABLE "pet"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "kind_of_animal"`);
        await queryRunner.query(`DROP TABLE "breed"`);
    }

}
