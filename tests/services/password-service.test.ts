import PasswordEncryptionService from "../../src/services/PasswordEncryptionService";


describe("Test PasswordService", () => {
    test("PasswordEncryptionService should check password", () => {
        const service = new PasswordEncryptionService("foo");
        const encrypted = service.encryptPassword("1234");
        expect(service.checkPassword("1234", encrypted)).toBe(true);
        expect(service.checkPassword("12345", encrypted)).toBe(false);
    })
})