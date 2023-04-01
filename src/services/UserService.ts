import {Prisma} from ".prisma/client";
import UserCreateInput = Prisma.UserCreateInput;
import prisma from "@/client";
import {User} from "@prisma/client";


class UserService {

    async createUser(user: UserCreateInput): Promise<User> {

        return prisma.user.create({data: user});
    }

}

export default UserService