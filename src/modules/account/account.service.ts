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

  async findBy(field: string, value: any): Promise<Account> {
    return await this.accountModle.findOne({ [field]: value }).exec();
  }

  async create(account: Account): Promise<Account> {
    return await this.accountModle.create(account);
  }
}
