import * as Yup from "yup";
export const regSchema = Yup.object({
    email: Yup.string().email().required(),
    name: Yup.string().required(),
    password: Yup.string().required().matches(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,30}$/),
    cPassword: Yup.string().required().oneOf([Yup.ref('password')])
})