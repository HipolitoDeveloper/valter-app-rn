import {z} from "zod"

export const SSigninForm = z.object({
    username: z.string().email({message: 'E-mail inválido.'}),
    password: z.string().min(6,  {message: 'É necessário ter no minínmo 6 caracteres.'})
})

export type TSigninForm = z.infer<typeof SSigninForm>