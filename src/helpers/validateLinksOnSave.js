export const validateLinksOnSave = (links) => {
  const validationRules = {
    github: /^https:\/\/github\.com\/[A-Za-z0-9_-]+$/,
    "frontend-mentor":
      /^https:\/\/www\.frontendmentor\.io\/profile\/[A-Za-z0-9_-]+$/,
    twitter: /^https:\/\/twitter\.com\/[A-Za-z0-9_-]+$/,
    linkedin: /^https:\/\/(www\.)?linkedin\.com\/in\/[A-Za-z0-9_-]+$/,
    youtube:
      /^https:\/\/(www\.)?youtube\.com\/(@[A-Za-z0-9_-]+|channel\/[A-Za-z0-9_-]+|c\/[A-Za-z0-9_-]+)$/,
    facebook: /^https:\/\/(www\.)?facebook\.com\/[A-Za-z0-9._-]+$/,
    twitch: /^https:\/\/(www\.)?twitch\.tv\/[A-Za-z0-9_-]+$/,
    devto: /^https:\/\/dev\.to\/[A-Za-z0-9_-]+$/,
    codewars: /^https:\/\/www\.codewars\.com\/users\/[A-Za-z0-9_-]+$/,
    codepen: /^https:\/\/codepen\.io\/[A-Za-z0-9_-]+$/,
    freecodecamp: /^https:\/\/www\.freecodecamp\.org\/[A-Za-z0-9_-]+$/,
    gitlab: /^https:\/\/gitlab\.com\/[A-Za-z0-9_-]+$/,
    hashnode: /^https:\/\/hashnode\.com\/@[A-Za-z0-9_-]+$/,
    "stack-overflow":
      /^https:\/\/stackoverflow\.com\/users\/[0-9]+\/[A-Za-z0-9_-]+$/,
  };

  // Validate each link and add validation details
  const newLinks = links?.map((link) => {
    const platform = link?.platform?.trim()?.toLowerCase(); // Normalize the platform key
    const url = link?.link?.trim(); // Normalize the link

    if (!url) {
      return {
        ...link,
        validation: {
          isValid: false,
          message: "Can't be empty",
        },
      };
    }

    const isValid = validationRules[platform]?.test(url) || false;
    return {
      ...link,
      validation: {
        isValid,
        message: isValid ? "" : "Please check the URL",
      },
    };
  });

  // Check if all links are valid
  const areAllLinksValid = newLinks?.every((link) => link.validation?.isValid);

  return [newLinks, areAllLinksValid];
};
