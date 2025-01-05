import { Button } from "../../../../generalComponents/Button";
import { LinkCard } from "./LinkCard";
import { validateLinksOnSave } from "../../../../helpers";
import { useDispatch } from "react-redux";
import {
  addLink,
  updateLinkPlatform,
  updateLinks,
  updateLinkText,
} from "../redux/slice";
import { useSelector } from "react-redux";

export const FormActions = ({ setLinks }) => {
  const dispatch = useDispatch();
  const links = useSelector((state) => state.links);

  const handleSelectedPlatform = (newLink, linkId) => {
    dispatch(
      updateLinkPlatform({
        linkId,
        newPlatform: newLink?.value,
        label: newLink?.label,
      })
    );
  };

  const handleLinkTextChange = (linkText, linkId) => {
    dispatch(
      updateLinkText({
        linkId,
        linkText,
      })
    );
  };

  const handleAddNewLink = () => {
    const newLink = {
      id: links?.length,
      platform: "frontend-mentor",
      label: "Frontend Mentor",
      link: "https://www.frontendmentor.io/profile/AbroShahzeb",
      validation: {
        isValid: true,
        message: "",
      },
    };

    dispatch(addLink(newLink));
  };

  const handleSave = () => {
    const [newLinks, areAllLinksValid] = validateLinksOnSave(links);
    dispatch(updateLinks(newLinks));
  };
  return (
    <div className="rounded-[12px] bg-white flex-1 flex flex-col overflow-y-auto scrollbar-none">
      <div className="p-10 flex flex-col gap-10 ">
        <div className="flex flex-col gap-2 items-start">
          <h2 className="heading-m text-dark">Customize your links</h2>
          <p className="body-m text-light-500">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>

        <div className="h-full  flex flex-col gap-5">
          <Button
            label="+ Add new link"
            variant="secondary"
            className="w-full"
            onClick={handleAddNewLink}
          />

          <div className="flex flex-col gap-5">
            {links?.map((link, index) => (
              <LinkCard
                link={link}
                setSelectedPlatform={handleSelectedPlatform}
                handleLinkTextChange={handleLinkTextChange}
                linkNumber={index + 1}
                key={link?.id}
                links={links}
                setLinks={setLinks}
              />
            ))}
          </div>
        </div>
      </div>

      {/* SAVE ACTION BUTTON */}
      <div className="mt-auto flex items-center justify-end border-t border-light-300 px-10 py-6">
        <Button label="Save" onClick={handleSave} />
      </div>
    </div>
  );
};
