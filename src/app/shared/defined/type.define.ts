export interface LoginResponse {
    status: number,
    message: string,
    data: {
        token: string,
        user: object
    }
}

export interface LoginErrorResponse {
    error: {
        message: string,
        status: number
    }
}

export interface User {
    id,
    role_id: number,
    code: string,
    email: string,
    birthday: string,
    gender: number
}