export interface ResponseError {
  non_field_errors?: string[];
}

export interface LoginResponseError extends ResponseError {
  email?: string[];
  password?: string[];
}
