import { IconGithub } from "../assets/svgComponents/IconGithub";
import { IconTwitter } from "../assets/svgComponents/IconTwitter";
import { IconLinkedin } from "../assets/svgComponents/IconLinkedin";
import { IconYoutube } from "../assets/svgComponents/IconYoutube";
import { IconFacebook } from "../assets/svgComponents/IconFacebook";
import { IconTwitch } from "../assets/svgComponents/IconTwitch";
import { IconDevTo } from "../assets/svgComponents/IconDevTo";
import { IconCodewars } from "../assets/svgComponents/IconCodewars";
import { IconCodepen } from "../assets/svgComponents/IconCodepen";
import { IconFreeCodeCamp } from "../assets/svgComponents/IconFreecodecamp";
import { IconGitlab } from "../assets/svgComponents/IconGitlab";
import { IconHashnode } from "../assets/svgComponents/IconHashnode";
import { IconStackOverflow } from "../assets/svgComponents/IconStackOverflow";
import { IconArrowRight } from "../assets/svgComponents/IconArrowRight";
import { IconFrontendMentorColorful } from "../assets/svgComponents/IconFrontendMentorColorful";

export const LinkToCardMapper = ({ link }) => {
  const typeToLinkMapper = (platform) => {
    const options = [
      {
        id: 0,
        label: "GitHub",
        value: "github",
        icon: <IconGithub className="w-5 h-5 items-center justify-center" />,
        background: "#1A1A1A",
      },
      {
        id: 1,
        label: "Frontend Mentor",
        value: "frontend-mentor",
        icon: (
          <IconFrontendMentorColorful className="w-5 h-5 items-center justify-center" />
        ),
        background: "#fff",
        textColor: "#333",
      },
      {
        id: 2,
        label: "Twitter",
        value: "twitter",
        icon: <IconTwitter className="w-5 h-5 items-center justify-center" />,
        background: "#43B7E9",
      },
      {
        id: 3,
        label: "LinkedIn",
        value: "linkedin",
        icon: <IconLinkedin className="w-5 h-5 items-center justify-center" />,
        background: "#2D68FF",
      },
      {
        id: 4,
        label: "Youtube",
        value: "youtube",
        icon: <IconYoutube className="w-5 h-5 items-center justify-center" />,
        background: "#EE3939",
      },
      {
        id: 5,
        label: "Facebook",
        value: "facebook",
        icon: <IconFacebook className="w-5 h-5 items-center justify-center" />,
        background: "#2442AC",
      },
      {
        id: 6,
        label: "Twitch",
        value: "twitch",
        icon: <IconTwitch className="w-5 h-5 items-center justify-center" />,
        background: "#EE3FC8",
      },
      //   {
      //     id: 7,
      //     label: "Dev.to",
      //     value: "devto",
      //     icon: <IconDevTo className="w-5 h-5 items-center justify-center" />,
      //     background: "#333",
      //   },
      {
        id: 8,
        label: "Codewars",
        value: "codewars",
        icon: <IconCodewars className="w-5 h-5 items-center justify-center" />,
        background: "#8A1A50",
      },
      {
        id: 9,
        label: "Codepen",
        value: "codepen",
        icon: <IconCodepen className="w-5 h-5 items-center justify-center" />,
        background: "#302267",
      },
      {
        id: 10,
        label: "FreeCodeCamp",
        value: "freecodecamp",
        icon: (
          <IconFreeCodeCamp className="w-5 h-5 items-center justify-center" />
        ),
        background: "#302267",
      },
      {
        id: 11,
        label: "GitLab",
        value: "gitlab",
        icon: <IconGitlab className="w-5 h-5 items-center justify-center" />,
        background: "#EB4925",
      },
      {
        id: 12,
        label: "Hashnode",
        value: "hashnode",
        icon: <IconHashnode className="w-5 h-5 items-center justify-center" />,
        background: "#0330D1",
      },
      {
        id: 13,
        label: "Stack Overflow",
        value: "stack-overflow",
        icon: (
          <IconStackOverflow className="w-5 h-5 items-center justify-center" />
        ),
        background: "#EC7100",
      },
    ];

    return options?.find((option) => option.value === platform);
  };

  const linkInfo = typeToLinkMapper(link.platform);

  return (
    <a
      className="flex items-center gap-2 h-[44px] p-4 rounded-md "
      href={link.link}
      target="_blank"
      style={{
        backgroundColor: linkInfo?.background,
        color: linkInfo?.textColor || "#fff",
        border: linkInfo?.background === "#fff" ? "1px solid #d9d9d9" : "none",
      }}
    >
      {linkInfo?.icon && (
        <div
          className="flex items-center"
          style={{ color: linkInfo.label === "Dev.to" && linkInfo.background }}
        >
          {linkInfo?.icon}
        </div>
      )}
      <div className="text-body-m flex items-center">{linkInfo?.label}</div>

      <div
        className="ml-auto"
        style={{ color: linkInfo?.background === "#fff" ? "#333" : "#fff" }}
      >
        <IconArrowRight />
      </div>
    </a>
  );
};
