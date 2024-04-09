export enum AuthFieldNames {
  email = 'email',
  password = 'password',
  confirmPassword = 'confirmPassword',
}

export type AuthFormData = Record<AuthFieldNames, string>;
export type LoginFormData = Omit<AuthFormData, AuthFieldNames.confirmPassword>;
