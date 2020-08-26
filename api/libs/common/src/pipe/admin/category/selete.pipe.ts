import { PipeTransform, ArgumentMetadata } from "@nestjs/common";
import { CategorySelectDto } from "@libs/common/dto/admin/category/select.dto";
import { ParamsException } from "@libs/common/error/exeception";

/** 自定义pipe */
export class CategorySelectPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  transform(value: any): CategorySelectDto {
    console.log('------CategorySelectPipe-----')
    return this.toValidate(value)
  }
  
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  private toValidate(value: any): CategorySelectDto {
    // 类型转换
    console.log(value)
    const _value = value
    console.log(typeof _value?.start)
    console.log(typeof _value?.limit)
    try {
      _value.start = parseInt(_value?.start, 0)
      _value.limit = parseInt(_value?.limit, 10)
    } catch (error) {
      console.log('error: ', error)
      throw new ParamsException(error)
    }
    // TODO
    // 检验规则
    return _value as CategorySelectDto
  }
}