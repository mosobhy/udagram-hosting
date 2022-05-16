import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";


// export const sequelize1 = new Sequelize(
//   `postgres://postgres:password123@udagram-database.ceiynnf21wgo.us-east-1.rds.amazonaws.com:5432/postgres`
// )

export const sequelize = new Sequelize(`postgres://${config.username}:${config.password}@${config.host}:${config.dbPort}/${config.database}`)
// export const sequelize = new Sequelize({
//   username: config.username,
//   password: config.password,
//   database: config.database,
//   host: config.host,
//   port: config.dbPort,

//   dialect: "postgres",
//   storage: ":memory:",
// });
