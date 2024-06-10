export interface PostSignUpType {
  statusCode: string;
  message: string;
  data?: {
    userId: string;
    name: string;
    id: number;
    isWithdrawal: string;
    createdAt: string;
  };
  timestamp?: string;
  path?: string;
  error?: {
    error: string;
    statusCode: number;
    message: string;
  };
}

export interface PostSignInType {
  statusCode: number;
  message: string;
  data?: {
    accessToken: string;
  };
  timestamp?: string;
  path?: string;
  error?: {
    error: string;
    statusCode: number;
    message: string;
  };
}

export interface GetFindIdType {
  statusCode: number;
  message: string;
  data?: {
    userId: string;
  };
  timestamp?: string;
  path?: string;
  error?: {
    error: string;
    statusCode: number;
    message: string;
  };
}

export interface GetCheckValidateType {
  statusCode: number;
  message: string;
  data?: {
    result: string;
  };
  timestamp?: string;
  path?: string;
  error?: {
    error: string;
    statusCode: number;
    message: string;
  };
}

export interface PostResetPasswordType {
  statusCode: number;
  message: string;
  data?: {
    result: string;
  };
  timestamp?: string;
  path?: string;
  error?: {
    error: string;
    statusCode: number;
    message: string;
  };
}
