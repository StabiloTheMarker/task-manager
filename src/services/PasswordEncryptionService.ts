import {AES, enc} from "crypto-js";

class PasswordEncryptionService {
    secret: string

    constructor(secret: string) {
        this.secret = secret;
    }

    public encryptPassword(unencryptedPassword: string): string {
        return AES.encrypt(unencryptedPassword, this.secret).toString();
    }

    public checkPassword(givenPassword: string, encryptedPassword: string): boolean {
        const decrypted = AES.decrypt(encryptedPassword, this.secret).toString(enc.Utf8)
        return decrypted === givenPassword;
    }
}

export default PasswordEncryptionService