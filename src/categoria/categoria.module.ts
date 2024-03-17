import { CategoriaController } from './controllers/categoria.controller';
import { CategoriaService } from './services/categoria.service';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categoria } from "./entities/categoria.entity";

@Module({
    imports:[TypeOrmModule.forFeature([Categoria])],
    providers:[CategoriaService],
    controllers:[CategoriaController],
    exports:[TypeOrmModule]
})
export class CategoriaModule { }