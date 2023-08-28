import {z} from "zod"

export const SSignupForm = z.object({
    name: z.string().min(3,{message: 'Nome inválido.'}),
    username: z.string().email({message: 'E-mail inválido.'}),
    password: z.string().min(6,  {message: 'É necessário ter no minínmo 6 caracteres.'})
})

export type TSignupForm = z.infer<typeof SSignupForm>