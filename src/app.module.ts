import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './modules/account/account.module';
import { UserModule } from './modules/user/user.module';
import { BlogModule } from './modules/blog/blog.module';
import { StyleModule } from './modules/style/style.module';
import { LayoutModule } from './modules/layout/layout.module';
import { PublicPageModule } from './modules/public-page/public-page.module';
import { StarModule } from './modules/actions/star/star.module';
import { LikeModule } from './modules/actions/like/like.module';
import { ShareModule } from './modules/actions/share/share.module';
import { CommentModule } from './modules/actions/comment/comment.module';
import { FavoriteModule } from './modules/favorite/favorite.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `${process.env.DB_CONNECTION}/${process.env.DB_NAME}`,
    ),
    AccountModule,
    UserModule,
    BlogModule,
    StyleModule,
    LayoutModule,
    PublicPageModule,
    StarModule,
    LikeModule,
    ShareModule,
    CommentModule,
    FavoriteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
