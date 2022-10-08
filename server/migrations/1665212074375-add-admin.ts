import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { bcryptContants } from '../src/auth/constants';

export class addAdmin1665212074375 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const password = await bcrypt.hash('password', bcryptContants.salt);
    await queryRunner.query(
      `INSERT INTO users VALUES (1, 'admin', '${password}', 'Admin Admin', 'Admin', 'Senior', 'admin', '<avatarSrc>')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
