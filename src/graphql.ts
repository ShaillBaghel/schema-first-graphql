
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateDepartmentInput {
    name: string;
}

export class CreateStudentInput {
    name: string;
    email: string;
    password: string;
    departmentId: string;
}

export class Department {
    id: string;
    name: string;
    students: Student[];
    created_at: DateTime;
}

export class Student {
    id: string;
    name: string;
    email: string;
    password: string;
    department: Department;
    created_at: DateTime;
}

export abstract class IQuery {
    abstract departments(): Nullable<Department>[] | Promise<Nullable<Department>[]>;

    abstract department(id: string): Nullable<Department> | Promise<Nullable<Department>>;

    abstract students(): Nullable<Student>[] | Promise<Nullable<Student>[]>;

    abstract student(id: string): Nullable<Student> | Promise<Nullable<Student>>;
}

export abstract class IMutation {
    abstract createDepartment(createDepartmentInput: CreateDepartmentInput): Department | Promise<Department>;

    abstract createStudent(createStudentInput: CreateStudentInput): Student | Promise<Student>;
}

export type DateTime = any;
type Nullable<T> = T | null;
