import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from './schemas/account.schema';
import mongoose from 'mongoose';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name) private accountModle: mongoose.Model<Account>,
  ) {}

  async find(): Promise<Account[]> {
    return await this.accountModle.find();
  }
}
