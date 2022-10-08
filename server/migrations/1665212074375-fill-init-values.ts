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

    await queryRunner.query(`INSERT INTO teams VALUES (1, 'Sanvi')`);

    await queryRunner.query(`INSERT INTO features VALUES (1, 'Обучение')`);
    await queryRunner.query(`INSERT INTO features VALUES (2, 'Менторинг')`);
    await queryRunner.query(`INSERT INTO features VALUES (3, 'Коммуникация')`);
    await queryRunner.query(`INSERT INTO features VALUES (4, 'Исследование')`);
    await queryRunner.query(`INSERT INTO features VALUES (5, 'Качество')`);
    await queryRunner.query(`INSERT INTO features VALUES (6, 'Экспертность')`);
    await queryRunner.query(
      `INSERT INTO features VALUES (${TOXICITY_ID}, 'Токсичность')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
