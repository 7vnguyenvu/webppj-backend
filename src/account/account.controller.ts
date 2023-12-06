import { Controller, Get } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from './schemas/account.schema';

@Controller('accounts')
export class AccountController {
  constructor(private accountSevice: AccountService) {}

  @Get()
  async find(): Promise<Account[]> {
    return await this.accountSevice.find();
  }

  //   @Get()
  //   async name() {
  //     return new Date().toISOString().replace(/\D/g, '');
  //   }
}
