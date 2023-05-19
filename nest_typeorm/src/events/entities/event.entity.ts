import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Workshop } from './workshop.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ select: true })
  name: string;

  @Column({ type: 'datetime', select: true })
  createdAt: string;

  @OneToMany(() => Workshop, (workshop) => workshop.event)
  @JoinColumn()
  workshops: Workshop[];
}
