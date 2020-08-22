import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { isNumber } from 'util';

/** 数字数组管道 */
export class ParseIntArrayPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return this.check(value)
  }

  private check(value: any): number[] {
    console.log(value)
    console.log(typeof value)
    try {
      const arr = value as number[]
      const nums = arr.filter(item =>isNumber(item))
      return nums
    } catch (error) {
      throw error
    }
  }
}
