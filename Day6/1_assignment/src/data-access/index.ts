import { User } from "../models/user";
import { AppDataSource } from "../config/data-source";
import { UserEntity } from "../entity/user";

const userRepository = AppDataSource.getRepository(UserEntity);

export const getUSers = async (): Promise<User[]> => {
    const userEntities = await userRepository.find();
    return userEntities.map((entity) => new User(entity.userId, entity.userName));
}

export const getUser = async (id: number): Promise<User | null> => {
    const employeeEntity = await userRepository.findOneBy({ userId: id });
    if (employeeEntity) {
        return new User(employeeEntity.userId, employeeEntity.userName);
    }
    return null;
}

export const insertUser = async (userToInsert: User): Promise<User> => {
    const userEntity = userRepository.create({
        userId: userToInsert.userId,
        userName: userToInsert.userName
    });

    await userRepository.save(userEntity);
    return new User(userEntity.userId, userEntity.userName);
}

export const findAndUpdateUser = async (id: number, userToUpdate: Partial<User>): Promise<User | null> => {
    let userEntity = await userRepository.findOneBy({ userId: id });
    if (userEntity) {
        userEntity = userRepository.merge(userEntity, userToUpdate);
        await userRepository.save(userEntity);
        return new User(userEntity.userId, userEntity.userName);
    }
    return null;
}

export const findAndDeleteUser = async (id: number): Promise<void> => {
    let userEntity = await userRepository.findOneBy({ userId: id });
    if (!userEntity) {
        throw new Error("User not found");
    }

    await userRepository.delete({ userId: id });
}