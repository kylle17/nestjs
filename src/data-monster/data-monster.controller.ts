import { Controller, Render, Param, Body, Res, Req } from '@nestjs/common';
import { Delete, Get, Post, Put, Patch } from '@nestjs/common';
import { Response } from 'express';
import { DataMonsterEntity } from './data-monster.entity';
import { DataMonsterService } from './data-monster.service';

@Controller('data-monster')
export class DataMonsterController {
  constructor(private readonly dataMonsterService: DataMonsterService) {}

  @Get()
  async root(@Res() res: Response) {
    return res.render('index', {
      monsterList: await this.dataMonsterService.findAll(),
    });
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    console.log(this.dataMonsterService.findOne(id));
    return this.dataMonsterService.findOne(id);
  }

  @Get('language/:language')
  getSome(@Param() dataMonsterEntity: DataMonsterEntity) {
    return this.dataMonsterService.findByLanguage(dataMonsterEntity);
  }

  @Post()
  async createMonster(@Body() dataMonsterEntity: DataMonsterEntity) {
    await this.dataMonsterService.create(dataMonsterEntity);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() dataMonsterEntity: DataMonsterEntity,
  ) {
    return this.dataMonsterService.update(+id, dataMonsterEntity);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.dataMonsterService.remove(id);
  }
}
