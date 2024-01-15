import { Injectable } from '@nestjs/common';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
import { DepartmentService } from 'src/department/department.service';
import { Department } from 'src/department/entities/department.entity';

@Injectable()
export class StudentService {
  constructor(@InjectRepository(Student) private studentRepository: Repository<Student>,
  private departmentService: DepartmentService){}
  create(createStudentInput: CreateStudentInput): Promise<Student> {
    const newStudent = this.studentRepository.create(createStudentInput)
    return this.studentRepository.save(newStudent)
  }

  findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  findOne(field: string, id: string): Promise<Student> {
    return this.studentRepository.findOneOrFail({where: {[field]: id}});
  }

  update(id: number, updateStudentInput: UpdateStudentInput) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
  getDepartment(departmentId: string): Promise<Department>{
    return this.departmentService.findOne(departmentId)
  }
}
