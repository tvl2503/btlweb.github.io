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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = void 0;
const axios_1 = __importDefault(require("axios"));
const request_1 = require("../constants/request");
exports.http = axios_1.default.create({
    url: request_1.BASE_URL
});
const request = (props) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, axios_1.default)({
            url: props.url,
            method: props.method || "GET",
            headers: Object.assign(Object.assign({}, props.headers), { Authorization: "Bearer " + (props === null || props === void 0 ? void 0 : props.token) }),
            params: props.params
                ? Object.assign({}, props.params) : undefined,
            data: props.body
                ? Object.assign({}, props.body) : undefined,
        });
        return response;
    }
    catch (err) {
        return err;
    }
});
exports.default = request;
