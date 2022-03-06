import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('data_monster')
export class DataMonsterEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title : String;

  @Column()
  explain : String;

  @Column()
  source_code : String;

  @Column()
  language : String;
}