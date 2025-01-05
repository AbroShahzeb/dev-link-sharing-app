export const Button = ({
  variant = "primary",
  onClick,
  label = "",
  disabled = false,
  className = "",
}) => {
  const variants = {
    primary:
      "bg-primary text-white py-[11px] px-[27px] rounded-md heading-sm disabled:opacity-25 active:bg-primary-light transition-all ",
    secondary:
      "border border-primary text-primary py-[11px] px-[27px] rounded-md heading-sm disabled:opacity-25 active:bg-primary-lightest transition-all ",
  };
  return (
    <button
      className={`${variants[variant]} ${className}`}
      onClick={() => onClick && onClick()}
      disabled={disabled}
    >
      {label && label}
    </button>
  );
};
