import { UPLOAD_KEY } from "../constants/type";
import { http } from "../base/request";
import { BASE_URL } from "../constants/request";
import { UploadServiceResponse } from "../types/request";

const FILE_URL = `${BASE_URL}/api/upload`;
export const uploadImage = async (file: File): Promise<UploadServiceResponse> => {
  const formData = new FormData();
  formData.append(UPLOAD_KEY, file);

  try{
    const response = await http.post<UploadServiceResponse>(`${FILE_URL}/file`, formData);
    if (response.status >= 400 || response.data.code >= 400) {
      throw new Error(response.data?.message || 'Cannot Upload File');
    };
    return response.data
  }catch(err: any) {
    return err?.message;
  }
};