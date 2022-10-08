import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { bcryptContants } from '../src/auth/constants';
import { TOXICITY_ID } from '../src/features/features.service';

export class fillInitValues1665212074375 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const password = await bcrypt.hash('password', bcryptContants.salt);
    await queryRunner.query(
      `INSERT INTO users VALUES (1, 'admin', '${password}', 'Admin Admin', 'Admin', 'Senior', 'admin', '<avatarSrc>')`,
    );

    await queryRunner.query(
      `INSERT INTO teams VALUES (1, 'Sanvi', '/static/teams/manchester-city-big.png')`,
    );

    await queryRunner.query(
      `INSERT INTO features VALUES (1, 'Коммуникация', '/static/features/chat (1) 1.svg')`,
    );
    await queryRunner.query(
      `INSERT INTO features VALUES (2, 'Отзывчивость', '/static/features/Mask group (8).svg')`,
    );
    await queryRunner.query(
      `INSERT INTO features VALUES (3, 'Лидерство', '/static/features/leadership 1.svg')`,
    );
    await queryRunner.query(
      `INSERT INTO features VALUES (4, 'Экспертность', '/static/features/brain 1.svg')`,
    );
    await queryRunner.query(
      `INSERT INTO features VALUES (5, 'Качество работы', '/static/features/high-quality 1.svg')`,
    );
    await queryRunner.query(
      `INSERT INTO features VALUES (${TOXICITY_ID}, 'Токсичность', '/static/features/😈.svg')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
