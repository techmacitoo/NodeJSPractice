import { Employee } from "src/models/employee";

const employees: Array<Employee> = [
    { id: 1, name: "Manish" },
    { id: 2, name: "Abhijeet" },
    { id: 3, name: "Ram" },
    { id: 4, name: "Abhishek" },
    { id: 5, name: "Ramakant" }
];

export const getAllEmployees = (): Array<Employee> => {
    return employees;
}