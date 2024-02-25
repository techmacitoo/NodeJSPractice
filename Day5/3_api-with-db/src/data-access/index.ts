import { Employee } from "../models/employee";
import { AppDataSource } from "../config/data-source";
import { EmployeeEntity } from "../entity/employee";

const employeeRepository = AppDataSource.getRepository(EmployeeEntity);

export const getEmployees = async (): Promise<Employee[]> => {
    const employeeEntities = await employeeRepository.find();
    return employeeEntities.map((entity) => new Employee(entity.employeeId, entity.name));
}

export const getEmployee = async (id: number): Promise<Employee | null> => {
    const employeeEntity = await employeeRepository.findOneBy({ employeeId: id });
    if (employeeEntity) {
        return new Employee(employeeEntity.employeeId, employeeEntity.name);
    }
    return null;
}

export const insertEmployee = async (employeeToInsert: Employee): Promise<Employee> => {
    const employeeEntity = employeeRepository.create({
        employeeId: employeeToInsert.id,
        name: employeeToInsert.name
    });

    await employeeRepository.save(employeeEntity);
    return new Employee(employeeEntity.employeeId, employeeEntity.name);
}

export const findAndUpdateEmployee = async (id: number, employeeToUpdate: Partial<Employee>): Promise<Employee | null> => {
    let employeeEntity = await employeeRepository.findOneBy({ employeeId: id });
    if (employeeEntity) {
        // employeeEntity = employeeRepository.merge(employeeEntity, employeeToUpdate);
        employeeEntity.name = employeeToUpdate.name ?? employeeEntity.name;
        await employeeRepository.save(employeeEntity);
        return new Employee(employeeEntity.employeeId, employeeEntity.name);
    }
    return null;
}

export const findAndDeleteEmployee = async (id: number): Promise<void> => {
    let employeeEntity = await employeeRepository.findOneBy({ employeeId: id });
    if (!employeeEntity) {
        throw new Error("Employee not found");
    }

    await employeeRepository.delete({ employeeId: id });
}