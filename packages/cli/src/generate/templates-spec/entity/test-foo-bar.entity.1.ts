import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TestFooBar {

  @PrimaryGeneratedColumn()
  // @ts-ignore : Property 'id' has no initializer and is not definitely assigned in theconstructor.
  id: number;

}
