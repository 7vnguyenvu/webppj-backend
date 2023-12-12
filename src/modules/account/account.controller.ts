import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from './schemas/account.schema';
import { HashService } from '../features/hash.service';

@Controller('api/accounts')
export class AccountController {
  constructor(
    private accountService: AccountService,
    private hashService: HashService,
  ) {}

  @Get()
  async find(): Promise<Account[]> {
    return await this.accountService.find();
  }

  @Post('create')
  async create(@Body() account): Promise<Account | any> {
    if (await this.accountService.findBy('username', account.username))
      return JSON.stringify('Tài khoản đã tồn tại!');

    account.password = await this.hashService.generateHash(account.password);
    return await this.accountService.create(account);
  }

  @Post('signin')
  async signin(@Req() req): Promise<Account | any> {
    // #. Kiểm tra Tên đăng nhập
    if (!(await this.accountService.findBy('username', req.body.username)))
      // return JSON.stringify('Tài khoản không tồn tại!');
      return {
        status: 401,
        message: 'Tài khoản không tồn tại!',
      };

    // #. Kiểm tra Mật khẩu
    const password = (
      await this.accountService.findBy('username', req.body.username)
    ).password;

    if (!(await this.hashService.compareHash(req.body.password, password)))
      // return JSON.stringify('Mật khẩu sai!');
      return {
        status: 401,
        message: 'Mật khẩu sai!',
      };

    // 1. Lấy kết quả Tài khoản khi đăng nhập thành công.
    // 2. Loại bỏ password (tránh lộ password) -> xử lý tạo JWT -> trả về cho người dùng.
    // const res = JSON.parse(
    //   JSON.stringify(
    //     await this.accountService.findBy('username', req.body.username),
    //   ),
    // );
    // delete res.password;
    const result = await this.accountService.findBy(
      'username',
      req.body.username,
    );

    return {
      // token: this.jwtService.sign(res),
      status: 200,
      message: 'Đăng nhập thành công!',
      account: {
        user_id: result.user_id,
        role: result.role,
        locked: result.locked,
      },
    };
  }
}
