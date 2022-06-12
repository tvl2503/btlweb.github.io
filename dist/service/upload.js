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
exports.uploadImage = void 0;
const type_1 = require("../constants/type");
const request_1 = require("../base/request");
const request_2 = require("../constants/request");
const FILE_URL = `${request_2.BASE_URL}/api/upload`;
const uploadImage = (file) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const formData = new FormData();
    formData.append(type_1.UPLOAD_KEY, file);
    try {
        const response = yield request_1.http.post(`${FILE_URL}/file`, formData);
        if (response.status >= 400 || response.data.code >= 400) {
            throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || 'Cannot Upload File');
        }
        ;
        return response.data;
    }
    catch (err) {
        return err === null || err === void 0 ? void 0 : err.message;
    }
});
exports.uploadImage = uploadImage;
