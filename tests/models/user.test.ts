import '../integrationbase'
import client from "../integrationbase";

async function clearUserTable() {
    await client.user.deleteMany({})
}

afterEach(async () => {
    await clearUserTable();
})
describe("Should test User model", () => {
    test("should create a new user", async () => {
        const user = await client.user.create( {
            data:{
                email: "foo@foo.at",
                password: "foo"
            }
        })
        expect(user.email).toBe("foo@foo.at")
    })
})