import { Module } from '@nestjs/common';
import { DataMonsterModule } from './data-monster/data-monster.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//DB
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot() , DataMonsterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {};
}
