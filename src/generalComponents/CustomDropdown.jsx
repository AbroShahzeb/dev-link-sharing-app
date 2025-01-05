import { Button, Dropdown, Menu } from "antd";
import { useEffect, useState } from "react";
import { IconChevronDown } from "../assets/svgComponents/IconChevronDown";
import { IconLink } from "../assets/svgComponents/IconLink";

export const CustomDropdown = ({
  options = [],
  onSelect,
  selectedOptions = [],
  placeholder = "Select an option",
  className = "",
  inputWidth,
  layout = "vertical",
  icon = <IconLink />,
  label = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(selectedOptions);

  const handleMenuClick = ({ key }) => {
    const selectedOption = options.find((option) => option.value === key);
    // Update selected option
    setSelected(selectedOption);
    setIsOpen(false);

    // Trigger the onSelect callback
    if (onSelect) {
      onSelect(selectedOption);
    }
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      className="max-h-[300px] overflow-y-auto scrollbar-none"
    >
      {options.map((option) => {
        return (
          <Menu.Item key={option.value}>
            <div className={`flex items-center gap-3 `}>
              {option?.icon && <span className={` `}>{option.icon}</span>}
              <span className="text-body-md">{option?.label}</span>
            </div>
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <div
      className={`relative w-full ${className} flex ${
        layout === "vertical"
          ? "flex-col items-start gap-50"
          : "flex-row items-center gap-100"
      }`}
      style={{ width: inputWidth && inputWidth }}
    >
      {label && <p className="body-sm text-dark mb-1">{label}</p>}
      <Dropdown
        overlay={menu}
        trigger={["click"]}
        onOpenChange={(open) => setIsOpen(open)}
        open={isOpen}
        overlayClassName="custom-dropdown"
      >
        <Button
          className={`custom-dropdown-button gap-3 h-full bg-white w-full text-body-m ${
            isOpen ? "border-primary" : "border-primary-light"
          }`}
          onClick={(e) => e.preventDefault()}
          style={{ width: inputWidth && inputWidth }}
        >
          {icon && <span>{icon}</span>}
          <span
            className="text-body-m truncate text-left flex-1 overflow-hidden whitespace-nowrap text-ellipsis"
            title={
              selected
                ? selected.label // Show the selected label
                : placeholder
            }
          >
            {selected ? selected.label : placeholder}
          </span>
          <span className={`${!isOpen ? "rotate-0" : "rotate-180"} ml-auto`}>
            <IconChevronDown />
          </span>
        </Button>
      </Dropdown>
    </div>
  );
};
