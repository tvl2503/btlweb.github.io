import { v4 } from "uuid";
import { getHeader } from "../layout/header";
import { convertImageToURL } from "../utils/image";
import { uploadImage } from "../service/upload";

const boxUpload = document.querySelector(".box-upload")!;

type UseStateGetValue<T> = () => T;

type UseStateSetValue<T> = (newState: T) => void;

const useState = <T>(
  defaultValue: T
): [UseStateGetValue<T>, UseStateSetValue<T>] => {
  let value = defaultValue;

  const setValue = (newValue: T) => {
    value = newValue;
  };
  const getValue = (): T => {
    return value as T;
  };

  return [getValue, setValue];
};

getHeader();

const [getImageURL, setImageUrl] = useState<string | null>(null);

(function () {
  const [getTitle, setTitle] = useState("");
  const [getDescription, setDescription] = useState("");
  const [getPrice, setPrice] = useState("");
  const inputTitle = document.getElementById("title");
  const inputDescription = document.getElementById("description");
  const inputPrice = document.getElementById("price");
  const btnSubmit = document.querySelector('.btn-submit');
  const form = document.querySelector('form');

  inputTitle?.addEventListener("input", (event: Event) => {
    const { value } = event.target as HTMLInputElement;
    setTitle(value);
  });

  inputDescription?.addEventListener("input", (event) => {
    const { value } = event.target as HTMLInputElement;

    setDescription(value);
  });

  inputPrice?.addEventListener("input", (event) => {
    setPrice((<HTMLInputElement>event.target).value);
  });

  btnSubmit?.addEventListener('click', () => {
    const title = getTitle();
    const description = getDescription();
    const price = getPrice();
    const imageURL = getImageURL();

    if (!title || !description || !price || !imageURL) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    };
    form?.submit();
  }); 
})();

const genTemplateImage = (src: string, id: string) => {
  return `
  <div id=${id} class="upload-image">
  <img src=${src} alt=""/>
  <div class="loading-spinner">
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>
  </div>`;
};

const uploadGenerateLinkImage = async (file: File, idTemplate: string) => {
  const templateId = document.getElementById(idTemplate) as HTMLDivElement;
  const imageMatchId = templateId.querySelector('img') as HTMLImageElement;
  const response = await uploadImage(file);
  const url = response.data;
  if (!url) {
    alert(response?.message || "Không thể tải lên ảnh, xin thử lại");
    imageMatchId?.remove();
  };
  imageMatchId.src = url;
  const loadingSpinner = templateId.querySelector('.loading-spinner');
  loadingSpinner?.remove();
  setImageUrl(url);
};

const onUploadImage = () => {
  const uploadFileInput = document.getElementById("upload-file");
  uploadFileInput?.click();

  uploadFileInput?.addEventListener("change", async (event) => {
    const { files } = event.target as HTMLInputElement;
    if (!files) {
      return;
    }
    const file = files[0];
    const url = convertImageToURL(file);
    const idImage = v4();
    const templateImage = genTemplateImage(url, idImage);
    boxUpload.textContent = "";
    boxUpload?.insertAdjacentHTML("afterbegin", templateImage);
    await uploadGenerateLinkImage(file, idImage);
  });
};

(function () {
  boxUpload?.addEventListener("click", onUploadImage);
})();
