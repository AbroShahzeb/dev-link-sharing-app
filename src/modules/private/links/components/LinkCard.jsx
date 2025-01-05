import { IconDragAndDrop } from "../../../../assets/svgComponents/IconDragAndDrop";
import { LinksDropdown } from "../../../../generalComponents/LinksDropdown";
import { CustomInput } from "../../../../generalComponents/CustomInput";
import { useState } from "react";
import { IconLink } from "../../../../assets/svgComponents/IconLink";
import { generatePlaceholderByPlatform } from "../../../../helpers/generatePlaceholderByPlatform";
import {
  removeLink,
  reorderLinks,
  updateLinkPlatform,
  updateLinkText,
} from "../redux/slice";
import { useDispatch } from "react-redux";

export const LinkCard = ({
  link,

  handleLinkTextChange,
  linkNumber,
}) => {
  const [value, setValue] = useState(link?.link || "");

  const dispatch = useDispatch();

  const handleLinkChange = (newLink) => {
    dispatch(
      updateLinkPlatform({
        linkId: link?.id,
        newPlatform: newLink?.value,
        label: newLink?.label,
      })
    );
  };

  //   const onLinkTextChange = (linkText, linkId) => {
  //     setValue(linkText);

  //     dispatch(
  //       updateLinkText({
  //         linkId,
  //         linkText,
  //       })
  //     );
  //   };

  const onLinkTextChange = (linkText) => {
    setValue(linkText); // Update the local state for immediate feedback
    dispatch(
      updateLinkText({
        linkId: link.id, // Use the `link.id` from props
        linkText,
      })
    );
  };

  const handleDragStart = (e, dragItem) => {
    e.dataTransfer.setData("drag-item", JSON.stringify(dragItem));
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Prevent default to allow dropping
  };

  const handleDrop = (e, dropTarget) => {
    e.preventDefault();
    const dragItem = JSON.parse(e.dataTransfer.getData("drag-item"));
    dispatch(reorderLinks({ dragId: dragItem.id, dropId: dropTarget.id }));
  };

  const placeholder = generatePlaceholderByPlatform(link?.platform);

  return (
    <div
      className="p-5 bg-light-100 rounded-[12px] flex flex-col gap-3 "
      draggable
      onDragStart={(e) => handleDragStart(e, link)}
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, link)}
    >
      <div className="flex items-center justify-between">
        <div className="text-light-500 flex items-center gap-2">
          <IconDragAndDrop />
          <p className="text-base font-bold">Link #{linkNumber}</p>
        </div>

        <button
          className="body-m text-light-500"
          onClick={() => dispatch(removeLink(link?.id))}
        >
          Remove
        </button>
      </div>
      <div>
        <LinksDropdown
          selectedLink={{
            label: link?.label,
            value: link?.platform,
          }}
          setSelectedLink={handleLinkChange}
          label={"Platform"}
        />
      </div>
      <div>
        <CustomInput
          icon={<IconLink />}
          label={"Link"}
          value={value}
          setValue={onLinkTextChange}
          placeholder={placeholder}
          error={!link?.validation?.isValid && link?.validation?.message}
        />
      </div>
    </div>
  );
};
