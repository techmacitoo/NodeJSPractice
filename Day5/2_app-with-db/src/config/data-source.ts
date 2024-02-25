import { DataSource } from "typeorm";
import "reflect-metadata";
import { EmployeeEntity } from "../entity/employee";

export const AppDataSource: DataSource = new DataSource({
    type: "mongodb",
    url: process.env.mongoURI,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    database: "EmployeeDB_Sync_Feb24",
    entities: [EmployeeEntity],
    synchronize: true,
    logging: true
});

AppDataSource.initialize().then(async () => {
    console.log("DataSource has been initialized successfully.");
}).catch((err) => {
    console.error("Error during Data Source initialization:", err);
});