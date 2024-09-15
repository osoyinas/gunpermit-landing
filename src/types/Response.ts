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
