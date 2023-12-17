export const DefaultImage = {
  filename: '',
  url: '',
};

export const DefaultSocialUrl = {
  name: '',
  hyperlink: '',
  url: '',
};

export const DefaultUserContact = {
  phone: '',
  email: '',
  socials: [],
};

export const DefaultUserInfo = {
  first_name: '',
  last_name: '',
  full_name: '',
  nick_name: '',
  bio: '',
  description: '',
  birth: '',
  contact: DefaultUserContact,
};

export const DefaultUserImage = {
  avatar: [
    {
      filename: 'user-default.png',
      url: `${process.env.HOME_PAGE}/images/avatars/user-default.png`,
    },
  ],
  cover: [
    {
      filename: 'user-default.png',
      url: `${process.env.HOME_PAGE}/images/cover-images/user-default.png`,
    },
  ],
};

export const DefaultLayoutThumbnailImage = {
  filename: 'default.png',
  url: `${process.env.HOME_PAGE}/images/layouts/page-intro-thumbnails/default.png`,
};
