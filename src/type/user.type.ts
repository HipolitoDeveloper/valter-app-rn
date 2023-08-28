import {User} from "../schema";

export type TUser = User & {
    password?: string
}

export type TAuthUser = User & {
    sessionToken: string,
}

