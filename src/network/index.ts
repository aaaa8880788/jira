import CDRequest from './request'
import type { CDRequestConfig } from './request/type'

const cdRequest = new CDRequest({
    baseURL:'',
    timeout:2000,
    interceptors:{
        requestInterceptor:(config:CDRequestConfig)=>{
            return config
        },
        requestInterceptorsCatch:(err)=>{
            return err
        },
        responseInterceptor:(res) =>{
            return res
        },
        responseInterceptorCatch:(err)=>{
            return err
        }
    }
})