import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [__dirname + './../entities/*.{ts,js}'],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize()
  .then(async () => {
    console.log("\n🍺 Data Source has been initialized!\n\n");
  })
  .catch((error) =>
    console.error("\n😭 Error during Data Source initialization\n\n", error)
  );
