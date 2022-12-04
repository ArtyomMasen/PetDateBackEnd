import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PetModule } from './pet/pet.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './orm.config';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig), UserModule, PetModule],
})
export class AppModule {}
