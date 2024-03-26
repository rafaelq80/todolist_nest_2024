import { AppController } from './app.controller';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { TarefaModule } from './tarefa/tarefa.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarefa } from './tarefa/entities/tarefa.entity';
import { ConfigModule } from '@nestjs/config';
import { ProdService } from './data/services/prod.service';
import { DevService } from './data/services/dev.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: ProdService,
      imports: [ConfigModule],
    }),
    TarefaModule,
    CategoriaModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}


