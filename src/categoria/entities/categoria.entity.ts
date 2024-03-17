import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tarefa } from "../../tarefa/entities/tarefa.entity";

@Entity({name: "tb_categorias"})
export class Categoria {

    @PrimaryGeneratedColumn()   
    @ApiProperty()  
    id: number

    @IsNotEmpty()
    @MaxLength(30)
    @Column({length: 30, nullable: false})
    @ApiProperty() 
    descricao: string

    @OneToMany(() => Tarefa, (tarefa) => tarefa.categoria)
    @ApiProperty() 
    tarefas: Tarefa[] 
}