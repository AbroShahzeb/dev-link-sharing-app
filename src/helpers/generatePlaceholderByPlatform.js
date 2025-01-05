export const generatePlaceholderByPlatform = (platform) => {
  const placeholders = {
    github: "https://github.com/username",
    "fronted-mentor": "https://www.frontendmentor.io/profile/username",
    twitter: "https://twitter.com/username",
    linkedin: "https://linkedin.com/in/username",
    youtube: "https://youtube.com/@username",
    facebook: "https://facebook.com/username",
    twitch: "https://twitch.tv/username",
    devto: "https://dev.to/username",
    codewars: "https://www.codewars.com/users/username",
    codepen: "https://codepen.io/username",
    freecodecamp: "https://www.freecodecamp.org/username",
    gitlab: "https://gitlab.com/username",
    hashnode: "https://hashnode.com/@username",
    "stack-overflow": "https://stackoverflow.com/users/12345678/username",
  };

  return placeholders[platform];
};
