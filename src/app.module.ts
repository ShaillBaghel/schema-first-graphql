import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { YogaDriver, YogaDriverConfig } from '@graphql-yoga/nestjs';
import { DepartmentModule } from './department/department.module';
import { Department } from './department/entities/department.entity';
import { StudentModule } from './student/student.module';
import { Student } from './student/entities/student.entity';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { upperDirectiveTransformer } from './upper.directive';

@Module({
  imports: [
    GraphQLModule.forRoot<YogaDriverConfig>({
      driver: YogaDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
      transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: 'upper',
            locations: [DirectiveLocation.FIELD_DEFINITION],
          }),
        ],
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'newpassword',
      database: 'schemaFirstGraphQL',
      synchronize: true,
      logging: true,
      entities: [Department, Student],
    }),
    DepartmentModule,
    StudentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
