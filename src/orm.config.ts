import { DataSource } from 'typeorm';
import { env } from 'process';
import { config } from 'dotenv';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

config();

const MigrationOrmSource = new DataSource({
  type: 'postgres',

  host: env.POSTGRES_HOST,
  port: parseFloat(env.POSTGRES_PORT),
  username: env.POSTGRES_USER,
  password: env.POSTGRES_PASSWORD,
  database: env.POSTGRES_DATABASE,

  entities: ['src/**/entity/*.entity.{js,ts}'],
  migrations: ['src/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',

  synchronize: false,
  migrationsRun: true,

  logging: ['query'],

  namingStrategy: new SnakeNamingStrategy(),
});

const TypeOrmConfig = {
  ...MigrationOrmSource.options,

  autoLoadEntities: true,

  entities: [__dirname + '/**/entity/*.entity.{js,ts}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
};

export { TypeOrmConfig };
export default MigrationOrmSource;
