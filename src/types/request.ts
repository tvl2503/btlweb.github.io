export interface BaseResponse {
  code: number;
  message: string;
}

export interface UploadServiceResponse extends BaseResponse {
  urls: Array<string>;
}
