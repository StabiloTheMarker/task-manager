import {rm} from "fs/promises";
import {PrismaClient} from "@prisma/client";
import {exec} from "child_process";

const pathToDb = "prisma/dev-test.db";

let client: PrismaClient = new PrismaClient();
afterAll(async () => {
    await client.$disconnect()
    await rm(pathToDb)
})

export default client