import { ObjectId } from "mongodb";
import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity({ name: 'employees' })
export class EmployeeEntity {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column({ unique: true })
    employeeId: number;

    @Column()
    name: string;

    @Column()
    department: string;
}