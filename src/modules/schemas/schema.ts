export class Image {
  filename?: string;
  url?: string;
}

export class ImageStatus {
  hide?: boolean;
  filename?: string;
  url?: string;
}

export class SocialUrl {
  name?: string;
  hyperlink?: string;
  url?: string;
}

export class UserContact {
  phone?: string;
  email?: string;
  socials?: SocialUrl[];
}

export class UserInfo {
  first_name?: string;
  last_name?: string;
  full_name?: string;
  nick_name?: string;
  bio?: string;
  description?: string;
  birth?: string;
  contact?: UserContact;
}

export class UserNone {
  last_name?: string;
}

export class UserImage {
  avatar?: Image[];
  cover?: Image[];
}

export class LayoutItemColConfig {
  xs?: Record<string, any>;
  sm?: Record<string, any>;
  md?: Record<string, any>;
  lg?: Record<string, any>;
  xl?: Record<string, any>;
  xxl?: Record<string, any>;
}

export class LayoutItem {
  type?: string;
  colConfig?: LayoutItemColConfig;
  styles?: Record<string, string | number>;
}

export class BlogOwner {
  name?: string;
  avatar?: Image[]; // fix nếu đầu vbaof cố định thì không thể cập nhật trạng thái người dùng được
  page_url?: string;
}

export class BlogContent {
  thumbnail?: Image[];
  title?: string;
  content?: string;
}

export class PublicPageImages {
  background?: Image;
  avatar?: ImageStatus;
  cover?: ImageStatus[];
}

export class PublicPageShow {
  name?: string;
  slogan?: string;
  images?: PublicPageImages;
}

export class Interaction {
  star?: number;
  like?: number;
  cmt?: number;
  share?: number;
}

export class InteractionContent {
  viewer?: number;
  blog?: number;
  link?: number;
  owner_avatar?: string;
}

export class PublicPageInfo {
  vertical?: boolean;
  info?: Interaction;
}

export class PageInfoContent {
  vertical?: boolean;
  info?: InteractionContent;
}
