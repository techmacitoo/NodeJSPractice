import { ObjectId } from "mongodb";
import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity({ name: 'user' })
export class UserEntity {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column({ unique: true })
    userId: number;

    @Column()
    userName: string;

}