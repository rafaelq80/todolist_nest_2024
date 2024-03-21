import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Tarefa } from "../../tarefa/entities/tarefa.entity";

@Injectable()
export class DevService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'db_todolist',
            entities: [Tarefa, Categoria],
            synchronize: true,
    };
  }
}