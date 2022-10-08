import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { bcryptContants } from '../src/auth/constants';

export class initValues1665246102071 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO teams VALUES (1, 'Sanvi', '/static/teams/manchester-city-big.png')`,
    );

    await queryRunner.query(
      `INSERT INTO wallets VALUES (1, '${process.env.PRIVATE_KEY}', '${process.env.PUBLIC_KEY}', ${process.env.INIT_MATIC_BALANCE}, ${process.env.INIT_COIN_BALANCE})`,
    );

    const password = await bcrypt.hash('password', bcryptContants.salt);
    await queryRunner.query(
      `INSERT INTO users VALUES (1, 'admin', '${password}', 'Admin Admin', 'Admin', 'Senior', 'admin', 1, '<avatarSrc>', now(), 1, 1)`,
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
