import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './modules/account/account.module';
import { UserModule } from './modules/user/user.module';
import { BlogModule } from './modules/blog/blog.module';
import { LayoutModule } from './modules/layout/layout.module';
import { PublicPageModule } from './modules/public-page/public-page.module';
import { StarModule } from './modules/actions/star/star.module';
import { LikeModule } from './modules/actions/like/like.module';
import { ShareModule } from './modules/actions/share/share.module';
import { CommentModule } from './modules/actions/comment/comment.module';
import { FavoriteModule } from './modules/favorite/favorite.module';
import { SystemNotifModule } from './modules/system-notif/system-notif.module';
import { TopicModule } from './modules/topic/topic.module';
import { EventModule } from './modules/event/event.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'files'),
    }),
    MongooseModule.forRoot(
      `${process.env.DB_CONNECTION}/${process.env.DB_NAME}`,
    ),
    AccountModule,
    UserModule,
    BlogModule,
    LayoutModule,
    PublicPageModule,
    EventModule,
    StarModule,
    LikeModule,
    ShareModule,
    CommentModule,
    FavoriteModule,
    SystemNotifModule,
    TopicModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
