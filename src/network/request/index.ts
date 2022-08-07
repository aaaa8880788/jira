import axios from 'axios'
import type { AxiosInstance } from 'axios'

import type { CDRequestConfig,CDRequestInterceptors } from './type'

class CDRequest {
    instance:AxiosInstance
    interceptors?:CDRequestInterceptors
    constructor(config:CDRequestConfig){
        this.instance = axios.create(config)
        this.interceptors = config.interceptors

        this.instance.interceptors.request.use(
            this.interceptors?.requestInterceptor,
            this.interceptors?.requestInterceptorsCatch
        )
        this.instance.interceptors.response.use(
            this.interceptors?.responseInterceptor,
            this.interceptors?.responseInterceptorCatch
        )
    }
    request(config:CDRequestConfig):Promise<any>{
        return new Promise((resolve,reject)=>{
            this.instance.request(config).then((res)=>{
                resolve(res)
            }).catch((err)=>{
                reject(err)
            })
        })
    }
    get(config:CDRequestConfig){
        return this.request({
            ...config,
            method:'GET'
        })
    }
    post(config:CDRequestConfig){
        return this.request({
            ...config,
            method:'POST'
        })
    }
    delete(config:CDRequestConfig){
        return this.request({
            ...config,
            method:'DELETE'
        })
    }
    put(config:CDRequestConfig){
        return this.request({
            ...config,
            method:'PUT'
        })
    }
}

export default CDRequest