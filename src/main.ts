import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { TenantContextInterceptor } from './shared/interceptors/tenant-context.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Barber ERP API')
    .setDescription('Sistema de gestión para barberías y peluquerías')
    .setVersion('1.0')
    .addBearerAuth() 
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // 3. CORS
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  });

  // 4. Pipes Globales
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // 5. Interceptores Globales
  app.useGlobalInterceptors(new TenantContextInterceptor());

  // 6. Iniciar Servidor
  const port = process.env.APP_PORT ?? 3010;
  await app.listen(port, '0.0.0.0');
  
  console.log(`🚀 Application is running on: http://localhost:${port}/api`);
  console.log(`📝 Swagger documentation: http://localhost:${port}/api/docs`);
}
bootstrap();