import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PublicPageController } from './public-page.controller';
import { PublicPageService } from './public-page.service';
import { PublicPageSchema } from './schemas/public-page.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PublicPage', schema: PublicPageSchema },
    ]),
  ],
  controllers: [PublicPageController],
  providers: [PublicPageService],
})
export class PublicPageModule {}
