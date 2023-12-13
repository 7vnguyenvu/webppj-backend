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
      url: 'http://localhost:7000/images/avatars/user-default.png',
    },
  ],
  cover: [
    {
      filename: 'user-default.png',
      url: 'http://localhost:7000/images/cover-images/user-default.png',
    },
  ],
};
