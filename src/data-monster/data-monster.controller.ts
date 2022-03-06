import { Controller, Delete, Get, Param, Post, Put , Patch } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { DataMonsterRequestDto } from 'src/domain/data-monster.request.dto';
import { DataMonsterEntity } from './data-monster.entity';
import { DataMonsterService } from './data-monster.service';

@Controller('data-monster')
export class DataMonsterController {
    constructor(private readonly dataMonsterService:DataMonsterService){}    

    @Get()
    getAll(){
        return this.dataMonsterService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id:number){
        return this.dataMonsterService.findOne(id);
    }

    @Post()
    async createMonster( @Body() dataMonsterEntity : DataMonsterEntity ){
        await this.dataMonsterService.create(dataMonsterEntity);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() dataMonsterEntity: DataMonsterEntity) {
        console.log(id);
        console.log(dataMonsterEntity);
        return this.dataMonsterService.update( +id , dataMonsterEntity);
    }

    @Delete(':id')
    remove( @Param('id') id:number ){
        this.dataMonsterService.remove(id);
    }


}
