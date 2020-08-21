/** 请求 method 枚举 */
export enum MethodEnum {
  /** get */
  GET = 'GET',
  /** post */
  POST = 'POST',
  /** put */
  PUT = 'PUT',
  /** delete */
  DELETE = 'DELETE',
}

/** 请求 ContentType 枚举 */
export enum ContentTypeEnum {
  /** json 对象 */
  JSON = 'application/json;charset=UTF-8',
  /** key-value 字符 */
  FORM_URLENCODED = 'application/x-www-form-urlencoded;chaset=UTF-8',
  /** upload 上传 */
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}
