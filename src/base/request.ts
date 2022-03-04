import axios from 'axios';
import { AxiosConfigParams } from '../models/PropsObject.js';

const request = async (props: AxiosConfigParams) => {
    return new Promise(async (resolve, reject) => {
        try{
            const response = await axios({
                url: props.url,
                method: props.method || "GET",
                headers: {
                    ...props.headers,
                    Authorization: 'Bearer ' + props?.token
                },
                params: props.params ? {
                    ...props.params
                } : undefined,
                data: props.body ? {
                    ...props.body
                } : undefined
            });
            resolve(response);
        }catch(err: any) {
            if (err.response) {
                return reject(err.response);
            }
            return reject(err);
        }
    })
}

export default request;