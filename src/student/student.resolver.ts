import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { StudentService } from './student.service';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { Department } from 'src/department/entities/department.entity';
import { Student } from './entities/student.entity';

@Resolver('Student')
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Mutation('createStudent')
  create(@Args('createStudentInput') createStudentInput: CreateStudentInput) {
    return this.studentService.create(createStudentInput);
  }

  @Query('students')
  findAll() {
    return this.studentService.findAll();
  }

  @Query('student')
  findOne(@Args('id') id: string) {
    return this.studentService.findOne('id', id);
  }

  // @Mutation('updateStudent')
  // update(@Args('updateStudentInput') updateStudentInput: UpdateStudentInput) {
  //   return this.studentService.update(updateStudentInput.id, updateStudentInput);
  // }

  // @Mutation('removeStudent')
  // remove(@Args('id') id: number) {
  //   return this.studentService.remove(id);
  // }
  @ResolveField(() => Department)
  department(@Parent() student: Student): Promise<Department> {
    return this.studentService.getDepartment(student.departmentId);
  }
}
