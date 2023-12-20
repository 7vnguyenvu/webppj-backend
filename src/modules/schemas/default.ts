export const DefaultImage = {
  filename: '',
  url: '',
};

export const DefaultImageStatus = {
  hide: false,
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

export const DefaultPublicPageImages = {
  background: DefaultImage,
  avatar: DefaultImageStatus,
  cover: [],
};

export const PublicPageShow = {
  name: '',
  slogan: '',
  images: DefaultPublicPageImages,
};

export const DefaultInteraction = {
  star: 0,
  like: 0,
  cmt: 0,
  share: 0,
};

export const DefaultInteractionContent = {
  viewer: 0,
  blog: 0,
  link: 0,
  owner_avatar: '',
};

export const DefaultPublicPageInfo = {
  vertical: false,
  info: DefaultInteraction,
};

export const DefaultPageInfoContent = {
  vertical: false,
  info: DefaultInteractionContent,
};
