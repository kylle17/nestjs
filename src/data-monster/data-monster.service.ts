import { Injectable } from '@nestjs/common';
import { DataMonsterRequestDto } from 'src/domain/data-monster.request.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DataMonsterEntity } from './data-monster.entity';

@Injectable()
export class DataMonsterService {

    constructor(
        @InjectRepository(DataMonsterEntity)
        private usersRepository: Repository<DataMonsterEntity>,
      ) {}

    async createMonster(dataMonsterEntity:DataMonsterEntity): Promise<void> {        
        await this.usersRepository.save(dataMonsterEntity);
    }

    findAll(){
        return this.usersRepository.find();
    }

    findOne(id:number){
        return this.usersRepository.findOne(id);
    }
 
    async update(){
        // await this.usersRepository.update();
    }

    async remove(id:number): Promise<void>{
        await this.usersRepository.delete(id);
    }

}
