import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { DataMonsterRequestDto } from 'src/domain/data-monster.request.dto';
import { DataMonsterEntity } from './data-monster.entity';
import { DataMonsterService } from './data-monster.service';

@Controller('data-monster')
export class DataMonsterController {
    constructor(private readonly dataMonsterService:DataMonsterService){}    

    @Get()
    getAllMonster(){

    }

    @Get(':id')
    getOneMonster(@Param('id') id:number){
        return this.dataMonsterService.findOne(id);
    }

    @Post()
    async createMonster( @Body() dataMonsterEntity : DataMonsterEntity ){
        await this.dataMonsterService.createMonster(dataMonsterEntity);
    }

    @Put()
    updateMonster(){

    }

    @Delete(':id')
    removeMonster( @Param('id') id:number ){
        this.dataMonsterService.remove(id);
    }


}
