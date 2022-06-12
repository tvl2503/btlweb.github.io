"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const image_1 = require("../utils/image");
const upload_1 = require("../service/upload");
const state_1 = require("../utils/state");
const query_1 = require("../utils/query");
const boxUpload = (0, query_1.qs)(".box-upload");
const [getImageURL, setImageUrl] = (0, state_1.useState)(null);
(function () {
    const [getTitle, setTitle] = (0, state_1.useState)("");
    const [getDescription, setDescription] = (0, state_1.useState)("");
    const [getPrice, setPrice] = (0, state_1.useState)("");
    const inputTitle = (0, query_1.gid)("title");
    const inputDescription = (0, query_1.gid)("description");
    const inputPrice = (0, query_1.gid)("price");
    const btnSubmit = (0, query_1.qs)('.btn-submit');
    const form = (0, query_1.qs)('form');
    inputTitle === null || inputTitle === void 0 ? void 0 : inputTitle.addEventListener("input", (event) => {
        const { value } = event.target;
        setTitle(value);
    });
    inputDescription === null || inputDescription === void 0 ? void 0 : inputDescription.addEventListener("input", (event) => {
        const { value } = event.target;
        setDescription(value);
    });
    inputPrice === null || inputPrice === void 0 ? void 0 : inputPrice.addEventListener("input", (event) => {
        setPrice(event.target.value);
    });
    btnSubmit === null || btnSubmit === void 0 ? void 0 : btnSubmit.addEventListener('click', () => {
        const title = getTitle();
        const description = getDescription();
        const price = getPrice();
        const imageURL = getImageURL();
        if (!title || !description || !price || !imageURL) {
            alert('Vui lòng điền đầy đủ thông tin!');
            return;
        }
        ;
        form === null || form === void 0 ? void 0 : form.submit();
    });
})();
const genTemplateImage = (src, id) => {
    return `
  <div id=${id} class="upload-image">
  <img src=${src} alt=""/>
  <div class="loading-spinner">
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>
  </div>`;
};
const uploadGenerateLinkImage = (file, idTemplate) => __awaiter(void 0, void 0, void 0, function* () {
    const urlInput = document.getElementById('url');
    const templateId = document.getElementById(idTemplate);
    const imageMatchId = templateId.querySelector('img');
    const response = yield (0, upload_1.uploadImage)(file);
    const url = response.data;
    if (!url) {
        alert((response === null || response === void 0 ? void 0 : response.message) || "Không thể tải lên ảnh, xin thử lại");
        imageMatchId === null || imageMatchId === void 0 ? void 0 : imageMatchId.remove();
    }
    ;
    imageMatchId.src = url;
    const loadingSpinner = templateId.querySelector('.loading-spinner');
    loadingSpinner === null || loadingSpinner === void 0 ? void 0 : loadingSpinner.remove();
    setImageUrl(url);
    urlInput.value = url;
});
const onUploadImage = () => {
    const uploadFileInput = document.getElementById("upload-file");
    uploadFileInput === null || uploadFileInput === void 0 ? void 0 : uploadFileInput.click();
    uploadFileInput === null || uploadFileInput === void 0 ? void 0 : uploadFileInput.addEventListener("change", (event) => __awaiter(void 0, void 0, void 0, function* () {
        const { files } = event.target;
        if (!files) {
            return;
        }
        const file = files[0];
        const url = (0, image_1.convertImageToURL)(file);
        const idImage = (0, uuid_1.v4)();
        const templateImage = genTemplateImage(url, idImage);
        boxUpload.textContent = "";
        boxUpload === null || boxUpload === void 0 ? void 0 : boxUpload.insertAdjacentHTML("afterbegin", templateImage);
        yield uploadGenerateLinkImage(file, idImage);
    }));
};
(function () {
    boxUpload === null || boxUpload === void 0 ? void 0 : boxUpload.addEventListener("click", onUploadImage);
})();
