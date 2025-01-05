import { NavLink } from "react-router-dom";
import { LogoDevlinksSmall } from "../../assets/svgComponents/LogoDevlinksSmall";
import { IconLinksHeader } from "../../assets/svgComponents/IconLinksHeader";
import { IconProfileDetailsHeader } from "../../assets/svgComponents/IconProfileDetailsHeader";
import { IconPreviewHeader } from "../../assets/svgComponents/IconPreviewHeader";
import { LogoDevlinksLarge } from "../../assets/svgComponents/LogoDevlinksLarge";

export const Navbar = () => {
  return (
    <nav className="bg-white px-6 py-4 flex items-center justify-between">
      <div className="sm:hidden">
        <LogoDevlinksSmall />
      </div>

      <div className="hidden sm:block">
        <LogoDevlinksLarge />
      </div>

      <div className="flex items-center">
        <NavLink to="/links">
          {({ isActive }) => (
            <div
              className={`py-[11px] px-[27px] rounded-md flex items-center gap-2 heading-sm text-light-500 ${
                isActive && "bg-primary-lightest text-primary"
              }`}
            >
              <IconLinksHeader />
              <p className="hidden sm:block">Links</p>
            </div>
          )}
        </NavLink>
        <NavLink to="/profile">
          {({ isActive }) => (
            <div
              className={`py-[11px] px-[27px] rounded-md flex items-center gap-2 heading-sm text-light-500 ${
                isActive && "bg-primary-lightest text-primary"
              }`}
            >
              <IconProfileDetailsHeader />
              <p className="hidden sm:block">Profile</p>
            </div>
          )}
        </NavLink>
      </div>

      <div className="px-4 py-[11px] border text-primary border-primary rounded-md flex items-center gap-2">
        <span className="sm:hidden">
          <IconPreviewHeader />
        </span>
        <p className="hidden sm:block">Preview</p>
      </div>
    </nav>
  );
};
