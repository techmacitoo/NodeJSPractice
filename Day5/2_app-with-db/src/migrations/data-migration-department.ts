import { AppDataSource } from "../config/data-source";
import { EmployeeEntity } from "../entity/employee";
import 'reflect-metadata';

async function migrateDepartmentData() {
    const employeeRepository = AppDataSource.getRepository(EmployeeEntity);

    try {
        const employees = await employeeRepository.find();

        for (const employee of employees) {
            employee.department = "IT";
        }

        await employeeRepository.save(employees);
        console.log("Data Migrations for Department completed successfully.");
    } catch (error) {
        console.error("Error during Data Migrations for Department:", error);
    }
}

migrateDepartmentData();