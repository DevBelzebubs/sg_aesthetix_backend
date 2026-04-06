import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const buildTypeOrmConfig = (): TypeOrmModuleOptions => ({
  type: 'mysql',
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT ?? 3306),
  username: process.env.DB_USER ?? 'aesthetix_user',
  password: process.env.DB_PASSWORD ?? 'your_password',
  database: process.env.DB_NAME ?? 'aesthetix_db',
  autoLoadEntities: true,
  synchronize: false,
});
