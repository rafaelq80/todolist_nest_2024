import { TarefaController } from './controllers/tarefa.controller';
import { TarefaService } from './services/tarefa.service';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tarefa } from "./entities/tarefa.entity";

@Module({
    imports:[TypeOrmModule.forFeature([Tarefa])],
    providers:[TarefaService],
    controllers:[TarefaController],
    exports:[TypeOrmModule]
})
export class TarefaModule { }