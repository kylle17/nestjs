import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DataMonsterEntity } from './data-monster.entity';

@Injectable()
export class DataMonsterService {
  constructor(
    @InjectRepository(DataMonsterEntity)
    private usersRepository: Repository<DataMonsterEntity>,
  ) {}

  async create(dataMonsterEntity: DataMonsterEntity): Promise<void> {
    await this.usersRepository.save(dataMonsterEntity);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOne(id);
  }

  findByLanguage(dataMonsterEntity: DataMonsterEntity) {
    return this.usersRepository.find(dataMonsterEntity);
  }

  update(id: number, dataMonsterEntity: DataMonsterEntity) {
    this.usersRepository.update(id, dataMonsterEntity);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
