import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { bcryptContants } from '../src/auth/constants';

export class addUsers1665148350549 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO teams VALUES (1, 'Sanvi')`);

    const password = await bcrypt.hash('sergey', bcryptContants.salt);
    await queryRunner.query(
      `INSERT INTO users VALUES (1, 'sergey', '${password}', 'Сергей Васильев', 'Project manager', 'Senior', 'teamlead', 100, 100, '<avatarSrc>', '1')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
