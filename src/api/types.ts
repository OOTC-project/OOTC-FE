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

export interface PostFindIdType {
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

export interface PatchResetPasswordType {
  statusCode: number;
  message: string;
  data?: {
    result: boolean;
  };
  timestamp?: string;
  error?: string;
}

export interface GetCategoryType {
  statusCode: number;
  message: string;
  data: {
    id: number;
    createdAt: string;
    name: string;
    clothes: clothesData[];
  };
  timestamp?: string;
  path?: string;
  error?: {
    error: string;
    statusCode: number;
    message: string;
  };
}

export interface clothesData {
  id: number;
  createdAt: string;
  name: string;
  clothesImg: string;
  description: string;
  position: string;
  fkCategoryId: number;
  fkMemberId: number;
}

export interface GetClothesDetailType {
  statusCode: number;
  message: string;
  data: {
    id: number;
    name: string;
    clothesImg: string;
    description: string;
    position: string;
    fkCategoryId: number;
    fkMemberId: number;
    createdAt: string;
  };
  timestamp?: string;
  path?: string;
  error?: {
    error: string;
    statusCode: string;
    message: string;
  };
}

export interface ClothesType {
  statusCode: string;
  message: string;
  data: {
    id: string;
    createdAt: string;
    name: string;
    clothesImg: string;
    description: string;
    position: string;
    fkCategoryId: string;
    fkMemberId: string;
  };
}

export interface PostCodyType {
  statusCode: number;
  message: string;
  data: {
    id: number;
    createdAt: string;
    fkCodyId: number;
    fkMemberId: number;
    clothes: {
      id: number;
      name: string;
      clothesImg: string;
      description: string;
      position: string;
      fkCategoryId: number;
      fkMemberId: number;
      createdAt: string;
    };
    cody: {
      id: number;
      name: string;
      createdAt: string;
      fkMemberId: number;
    };
  };
}

export interface GetCodyType {
  statusCode: number;
  message: string;
  data: {
    data: GetCodyData[];
  };
}

export interface GetCodyData {
  id: number;
  fkCodyId: number;
  fkClothesId: number;
  createdAt: string;
  cody: {
    id: number;
    name: string;
    createdAt: string;
    fkMemberId: number;
  };
  clothes: {
    id: number;
    name: string;
    clothesImg: string;
    description: string;
    position: string;
    fkCategoryId: number;
    fkMemberId: number;
    createdAt: string;
  };
}

export interface CodyDetailType {
  statusCode: number;
  message: string;
  data: {
    id: number;
    createdAt: string;
    fkCodyId: number;
    fkMemberId: number;
    clothes: {
      id: number;
      name: string;
      clothesImg: string;
      description: string;
      position: string;
      fkCategoryId: number;
      fkMemberId: number;
      createdAt: string;
    };
    cody: {
      id: number;
      name: string;
      createdAt: string;
      fkMemberId: number;
    };
  };
}

export interface RecommendType {
  statusCode: number;
  message: string;
  data: {
    id: number;
    createdAt: string;
    fkMemberId: number;
    fkCodyId: number;
  };
}

export interface GetOpenAiType {
  statusCode: number;
  message: string;
  data: {
    index: number;
    message: {
      role: string;
      content: string;
    };
    logprobs: null;
    finish_reason: string;
  };
}

export interface GetUserInfoType {
  statusCode: number;
  message: string;
  data: {
    id: number;
    createdAt: string;
    name: string;
    userId: string;
    profileImg: string;
    backgroundImg: string;
    isWithdrawal: number;
    email: string;
  };
}

export interface PatchUserInfoType {
  name: string;
  uploadedFiles?: {
    profileImg?: {
      fieldname: string;
      originalname: string;
      encoding: string;
      mimetype: string;
      size: number;
      buffer: string;
      url: string;
    };
    backgroundImg?: {
      fieldname: string;
      originalname: string;
      encoding: string;
      mimetype: string;
      size: number;
      buffer: string;
      url: string;
    };
  };
  email: string;
}
