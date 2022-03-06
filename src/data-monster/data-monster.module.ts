import { Module } from '@nestjs/common';
import { DataMonsterController } from './data-monster.controller';
import { DataMonsterService } from './data-monster.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataMonsterEntity } from './data-monster.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DataMonsterEntity])],
  controllers: [DataMonsterController],
  providers: [DataMonsterService]
})
export class DataMonsterModule {}
