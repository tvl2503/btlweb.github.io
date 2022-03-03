var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
const request = (props) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield axios({
                url: props.url,
                method: props.method || "GET",
                headers: Object.assign(Object.assign({}, props.headers), { Authorization: 'Bearer ' + (props === null || props === void 0 ? void 0 : props.token) }),
                params: props.params ? Object.assign({}, props.params) : undefined,
                data: props.body ? Object.assign({}, props.body) : undefined
            });
            resolve(response);
        }
        catch (err) {
            if (err.response) {
                return reject(err.response);
            }
            return reject(err);
        }
    }));
});
export default request;
