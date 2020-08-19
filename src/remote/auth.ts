import { internalAxios } from './axios'

export interface ICredentials {
    email: string
    password: string
}

export interface IPayload {
    username: string
    email: string
    password: string
    firstName: string
    lastName: string
}

export const signupRequest = async (credentials: IPayload) => {
    const response = await internalAxios.post('/register', credentials)
    console.log(response)
}

export const loginRequest = async (credentials: ICredentials) => {
    const response = await internalAxios.post('/login', credentials)
    console.log(response)

}
