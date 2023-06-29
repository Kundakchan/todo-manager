export interface AuthParam {
  email: string,
  password: string
}

export interface RegistrationParam extends AuthParam {
  name: string
}