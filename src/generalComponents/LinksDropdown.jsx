import { CustomDropdown } from "./CustomDropdown";
import { IconGithub } from "../assets/svgComponents/IconGithub";
import { IconFrontendMentor } from "../assets/svgComponents/IconFrontendMentor";
import { IconTwitter } from "../assets/svgComponents/IconTwitter";
import { IconLinkedin } from "../assets/svgComponents/IconLinkedin";
import { IconYoutube } from "../assets/svgComponents/IconYoutube";
import { IconFacebook } from "../assets/svgComponents/IconFacebook";
import { IconTwitch } from "../assets/svgComponents/IconTwitch";
// import { IconDevTo } from "../assets/svgComponents/IconDevTo";
import { IconCodewars } from "../assets/svgComponents/IconCodewars";
import { IconCodepen } from "../assets/svgComponents/IconCodepen";
import { IconFreeCodeCamp } from "../assets/svgComponents/IconFreecodecamp";
import { IconGitlab } from "../assets/svgComponents/IconGitlab";
import { IconHashnode } from "../assets/svgComponents/IconHashnode";
import { IconStackOverflow } from "../assets/svgComponents/IconStackOverflow";
import { IconLink } from "../assets/svgComponents/IconLink";

export const LinksDropdown = ({
  selectedLink = {},
  setSelectedLink,
  label,
}) => {
  const options = [
    {
      id: 0,
      label: "GitHub",
      value: "github",
      icon: <IconGithub />,
    },
    {
      id: 1,
      label: "Frontend Mentor",
      value: "frontend-mentor",
      icon: <IconFrontendMentor />,
    },
    {
      id: 2,
      label: "Twitter",
      value: "twitter",
      icon: <IconTwitter />,
    },
    {
      id: 3,
      label: "LinkedIn",
      value: "linkedin",
      icon: <IconLinkedin />,
    },
    {
      id: 4,
      label: "Youtube",
      value: "youtube",
      icon: <IconYoutube />,
    },
    {
      id: 5,
      label: "Facebook",
      value: "facebook",
      icon: <IconFacebook />,
    },
    {
      id: 6,
      label: "Twitch",
      value: "twitch",
      icon: <IconTwitch />,
    },
    // {
    //   id: 7,
    //   label: "Dev.to",
    //   value: "devto",
    //   icon: <IconDevTo />,
    // },
    {
      id: 8,
      label: "Codewars",
      value: "codewars",
      icon: <IconCodewars />,
    },
    {
      id: 9,
      label: "Codepen",
      value: "codepen",
      icon: <IconCodepen />,
    },
    {
      id: 10,
      label: "FreeCodeCamp",
      value: "freecodecamp",
      icon: <IconFreeCodeCamp />,
    },
    {
      id: 11,
      label: "GitLab",
      value: "gitlab",
      icon: <IconGitlab />,
    },
    {
      id: 12,
      label: "Hashnode",
      value: "hashnode",
      icon: <IconHashnode />,
    },
    {
      id: 13,
      label: "Stack Overflow",
      value: "stack-overflow",
      icon: <IconStackOverflow />,
    },
  ];

  const getIconBasedOnValue = (value) =>
    options?.find((option) => option.value === value).icon;

  return (
    <CustomDropdown
      options={options}
      selectedOptions={selectedLink}
      icon={
        selectedLink ? (
          selectedLink.icon || getIconBasedOnValue(selectedLink?.value)
        ) : (
          <IconLink />
        )
      }
      onSelect={setSelectedLink}
      label={label}
    />
  );
};
