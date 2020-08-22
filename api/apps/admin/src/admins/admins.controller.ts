import { Controller, Post, Get, Param, ParseIntPipe, Query, Delete, Body, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AdminsService } from './admins.service';

@ApiTags('管理员模块')
@Controller('admins')
export class AdminsController {
  constructor(
    private readonly adminService: AdminsService
  ) {}

  @ApiOperation({ summary: '登录授权' })
  @Post('login')
  login() {
    return this.adminService.login()
  }

  @ApiOperation({ summary: '已登录的管理员创建一个新的管理员账号' })
  @ApiBearerAuth()
  @Post('register')
  register() {
    return {
      msg: '成功添加新的管理员账号'
    }
  }

  @ApiOperation({ summary: '获取id号管理员详细信息' })
  @ApiBearerAuth()
  @Get(':id')
  adminInfo(
    @Param('id', ParseIntPipe) id: number
  ) {
    return {
      msg: 'id号管理员的详细信息'
    }
  }

  @ApiOperation({ summary: '获取管理员自己的详细信息' })
  @ApiBearerAuth()
  @Get('list')
  getAdminList(@Query() query) {
    return {
      msg: '获取管理员账号列表'
    }
  }

  @ApiOperation({ summary: '更新某id管理员的信息' })
  @ApiBearerAuth()
  @Put('update/:id')
  updateAdmin(
    @Param('id', ParseIntPipe) id: number,
    @Body() body
  ) {
    return {
      msg: '修改成功'
    }
  }

  @ApiOperation({ summary: '获取管理员自己的详细信息' })
  @ApiBearerAuth()
  @Delete('delete/:id')
  deleteAdmin(@Param('id', ParseIntPipe) id: number) {
    return {
      msg: '删除成功'
    }
  }

  @ApiOperation({ summary: '删除一组id的管理员' })
  @ApiBearerAuth()
  @Delete('delete')
  deleteAdmins(@Body() body) {
    return {
      msg: '全部删除成功'
    }
  }
}
