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
