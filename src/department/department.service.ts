import { Injectable } from '@nestjs/common';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './entities/department.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}
  create(createDepartmentInput: CreateDepartmentInput): Promise<Department> {
    const newDepartment = this.departmentRepository.create(
      createDepartmentInput,
    );
    return this.departmentRepository.save(newDepartment);
  }

  async findAll(): Promise<Department[]> {
    return await this.departmentRepository.find()
  }

  async findOne(id: string) {
    return await this.departmentRepository.findOneOrFail({where: {id}})
  }

  update(id: number, updateDepartmentInput: UpdateDepartmentInput) {
    return `This action updates a #${id} department`;
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}
