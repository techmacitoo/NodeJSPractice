import { DataSource } from "typeorm";
import "reflect-metadata";
import { UserEntity } from "../entity/user";

export const AppDataSource: DataSource = new DataSource({
    type: "mongodb",
    url: process.env.mongoURI,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    database: "UserDB_Sync_Feb24",
    entities: [UserEntity],
    synchronize: true,
    logging: true
});

AppDataSource.initialize().then(async () => {
    console.log("DataSource has been initialized successfully.");
}).catch((err) => {
    console.error("Error during Data Source initialization:", err);
});