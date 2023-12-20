import { Module } from '@nestjs/common';
import { LayoutController } from './layout.controller';
import { LayoutService } from './layout.service';
import { LayoutPageSchema } from './schemas/layout.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'LayoutPage', schema: LayoutPageSchema },
    ]),
  ],
  controllers: [LayoutController],
  providers: [LayoutService],
})
export class LayoutModule {}
