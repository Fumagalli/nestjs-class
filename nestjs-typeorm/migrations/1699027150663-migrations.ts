import { Logger } from '@nestjs/common';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1699027150663 implements MigrationInterface {
  private readonly logger = new Logger(Migrations1699027150663.name);
  public async up(queryRunner: QueryRunner): Promise<void> {
    this.logger.log('Up');
    await queryRunner.query(`UPDATE item set public = 1`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    this.logger.log('Down');
  }
}
