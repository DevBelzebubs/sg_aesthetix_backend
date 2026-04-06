import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RefreshTokenTypeOrmEntity } from './infrastructure/refresh-token.typeorm-entity';
import { RoleTypeOrmEntity } from './infrastructure/role.typeorm-entity';
import { UserTypeOrmEntity } from './infrastructure/user.typeorm-entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RoleTypeOrmEntity,
      UserTypeOrmEntity,
      RefreshTokenTypeOrmEntity,
    ]),
  ],
  exports: [TypeOrmModule],
})
export class IdentityModule {}
