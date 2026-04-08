import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppointmentsModule } from './modules/appointments/appointments.module';
import { CustomersModule } from './modules/customers/customers.module';
import { EmployeesModule } from './modules/employees/employees.module';
import { GalleryModule } from './modules/gallery/gallery.module';
import { IdentityModule } from './modules/identity/identity.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { LandingModule } from './modules/landing/landing.module';
import { LoyaltyModule } from './modules/loyalty/loyalty.module';
import { ServicesModule } from './modules/services/services.module';
import { TenantsModule } from './modules/tenants/tenants.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('AUTH_DB_HOST'),
        port: configService.get<number>('AUTH_DB_PORT'),
        username: configService.get<string>('AUTH_DB_USERNAME'),
        password: configService.get<string>('AUTH_DB_PASSWORD'),
        database: configService.get<string>('AUTH_DB_DATABASE'),
        autoLoadEntities: true,
        synchronize: true, 
        connectTimeout: 10000,
      }),
    }),

    // 3. Módulos de la aplicación
    TenantsModule,
    IdentityModule,
    ServicesModule,
    EmployeesModule,
    AppointmentsModule,
    CustomersModule,
    LoyaltyModule,
    InventoryModule,
    LandingModule,
    GalleryModule,
  ],
  controllers: [AppController],
})
export class AppModule {}