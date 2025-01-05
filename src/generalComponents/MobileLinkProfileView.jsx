import { useSelector } from "react-redux";
import { IllustrationPhoneMockup } from "../assets/svgComponents/IllustrationPhoneMockup";
import { LinkToCardMapper } from "./LinkToCardMapper";

export const MobileLinkProfileView = ({ height }) => {
  const links = useSelector((state) => state.links);
  const profile = useSelector((state) => state.user);
  return (
    <div
      className={`w-[307px] relative scale-[70%]`}
      style={{ height: height ? height : 631 }}
    >
      <div className="absolute inset-0 z-0">
        <IllustrationPhoneMockup
          hasProfilePhoto={profile?.picture}
          hasLinks={false}
          hasProfileName={profile?.firstName || profile?.lastName}
          hasEmail={profile?.email}
          height={height}
        />
      </div>

      {/* PROFILE PICTURE REPLACER */}
      {profile?.picture && (
        <div className="absolute w-24 h-24 rounded-full  z-10 left-[153.5px] top-[112px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden border-[4px] border-primary">
          <img
            src={profile.picture}
            alt="Profile picture"
            className="object-cover"
          />
        </div>
      )}

      {/* NAME REPLACER */}
      {(profile?.firstName || profile?.lastName) && (
        <div className="absolute top-[185px] left-[73.5px] w-40 h-4  rounded-md z-10 text-center flex items-center justify-center text-lg font-[600] text-dark">
          {profile?.firstName} {profile?.lastName}
        </div>
      )}

      {/* EMAIL REPLACER */}
      {profile?.email && (
        <div className="absolute top-[214px] left-[117.5px] w-[72px] h-2  rounded-sm z-10 text-center flex items-center justify-center text-sm font-[400] text-light-500">
          {profile.email}
        </div>
      )}

      {links && links.length > 0 && (
        <div className="absolute w-[237px] max-h-[300px] overflow-y-auto scrollbar-none  top-[278px]  left-1/2 -translate-x-1/2 z-10 flex flex-col gap-5">
          {links?.map((link) => (
            <LinkToCardMapper link={link} />
          ))}
        </div>
      )}
    </div>
  );
};
