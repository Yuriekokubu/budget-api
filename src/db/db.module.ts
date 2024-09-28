import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get('DB_DATABASE'),
        autoLoadEntities: config.get<boolean>('DB_AUTO_LOAD_ENTITIES'),
        synchronize: config.get<boolean>('DB_SYNCHRONIZE'),
      }),
    }),
  ],
})
export class DbModule {}
