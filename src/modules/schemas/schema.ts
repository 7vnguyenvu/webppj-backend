export class Image {
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

export class BlogContent {
  thumbnail?: Image;
  title?: string;
  content?: string;
}
