import { LoginModel, RegisterModel } from "../models/forms/authForms";


export const loginFormData =[
    new LoginModel('email','test@email.com','text','Email','mail-outline'),
    new LoginModel('password','********','password','Password', 'lock-closed-outline')
]
export const RegisterFormData =[
    new RegisterModel('firstName','John','text','First Name', 'person-outline'),
    new RegisterModel('lastName','Doe','text','Last Name', 'person-outline'),
    new RegisterModel('email','test@email.com','text','Email','mail-outline'),
    new RegisterModel('password','********','password','Password', 'lock-closed-outline')
]