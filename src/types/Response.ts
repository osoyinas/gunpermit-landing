export interface ResponseError {
  non_field_errors?: string[];
}

export interface LoginResponseError extends ResponseError {
  email?: string[];
  password?: string[];
}

export interface RegisterResponseError extends ResponseError {
  first_name?: string[];
  last_name?: string[];
  email?: string[];
  password?: string[];
  repeat_password?: string[];
}

export interface ForgotPasswordResponseError extends ResponseError {
  email?: string[];
}

export interface ChangePasswordResponseError extends ResponseError {
  old_password?: string[];
  new_password?: string[];
}

export interface ConfirmChangePasswordResponseError extends ResponseError {
  password?: string[];
  token?: string[];
}

export interface ResetPasswordResponseError extends ResponseError {
  token?: string[];
  password?: string[];
}

export interface PagedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
