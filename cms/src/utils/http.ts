/**
 * axois ts 简单封装
 * get ppst put delete
 */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ContentTypeEnum, MethodEnum } from '@/utils/enum/http.enum'

let baseURL = ''
if (process.env.NODE_ENV == 'development') {
  baseURL = process.env.VUE_APP_API_URL_PREFIX
} else if (process.env.NODE_ENV == 'production') {
  baseURL = process.env.VUE_APP_API_URL_PREFIX
}

const createConfig: AxiosRequestConfig = {
  baseURL,
  timeout: 6 * 1000,
  headers: {
    'Content-Type': ContentTypeEnum.JSON,
  },
  validateStatus: (status: number) => status >= 200 && status < 510,
}

const http = axios.create(createConfig)

http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // TODO
    // 每次请求都加token
    console.log('request config:', config)
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

http.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status.toString().startsWith('2')) {
      return response.data
    }
    // TODO
    //错误处理
    const statue = response.status
    switch (statue) {
      case 400:
        console.log(statue)
        break
      case 401:
        console.log(statue)
        break
      case 403:
        console.log(statue)
        break
      case 404:
        console.log(statue)
        break
      case 500:
        console.log(statue)
        break
      default:
        break
    }
    console.log('处理请求错误信息... ', response.data)
    console.log(typeof response.data)
    return Promise.reject()
  },
  (error: AxiosError) => {
    // TODO
    // 网络问题
    console.log('...网络问题...')
    if (
      error.code === 'ECONNABORTED' &&
      error.message.indexOf('timeout') !== -1
    ) {
      console.log('请求超时...')
    }
    return Promise.reject(error)
  },
)

/**
 * get
 * @param url 地址
 * @param params 对象参数
 */
export function useHttpGet<T>(
  url: string,
  params?: Record<string, any>,
): Promise<T> {
  return new Promise((resolve, reject) => {
    http({
      url,
      method: MethodEnum.GET,
      params: { ...params },
    })
      .then(res => {
        resolve((res as unknown) as T)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * delete方法，对应delete请求
 * @param {String} url [请求的url地址]
 */
export function useHttpPut<T>(url: string, data?: object): Promise<T> {
  return new Promise((resolve, reject) => {
    http({
      url,
      method: MethodEnum.PUT,
      data: { ...data },
    })
      .then(res => {
        resolve((res as unknown) as T)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function useHttpPost<T>(url: string, data?: object): Promise<T> {
  return new Promise((resolve, reject) => {
    http({
      url,
      method: MethodEnum.POST,
      data: { ...data },
    })
      .then(res => {
        resolve((res as unknown) as T)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * delete方法，对应delete请求
 * @param {String} url [请求的url地址]
 * @param {String} params [params参数]
 * @param {String} data [data参数]
 */
export function useHttpDelete<T>(
  url: string,
  params?: object,
  data?: object,
): Promise<T> {
  return new Promise((resolve, reject) => {
    http({
      url,
      method: MethodEnum.DELETE,
      params: { ...params },
      data: { ...data },
    })
      .then(res => {
        resolve((res as unknown) as T)
      })
      .catch(error => {
        reject(error)
      })
  })
}
