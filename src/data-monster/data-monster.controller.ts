import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Patch,
  Render,
} from '@nestjs/common';
import { Body } from '@nestjs/common';
import { DataMonsterRequestDto } from 'src/domain/data-monster.request.dto';
import { DataMonsterEntity } from './data-monster.entity';
import { DataMonsterService } from './data-monster.service';

@Controller('data-monster')
export class DataMonsterController {
  constructor(private readonly dataMonsterService: DataMonsterService) {}

  @Get()
  @Render('index')
  getAll() {
    return { message: 'Hello world!' };
    // return this.dataMonsterService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.dataMonsterService.findOne(id);
  }

  @Post()
  async createMonster(@Param() dataMonsterEntity: DataMonsterEntity) {
    console.log(dataMonsterEntity);
    await this.dataMonsterService.create(dataMonsterEntity);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() dataMonsterEntity: DataMonsterEntity,
  ) {
    console.log(id);
    console.log(dataMonsterEntity);
    return this.dataMonsterService.update(+id, dataMonsterEntity);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.dataMonsterService.remove(id);
  }
}
