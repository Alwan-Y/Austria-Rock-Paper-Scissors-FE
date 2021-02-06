import classNames from "classnames";

const Button = ({
  label,
  type,
  size,
  block,
  onClick,
  outline,
  disabled,
  className,
  dataToggle,
  dataTarget,
  dataDismiss,
}) => (
  <button
    type="button"
    className={classNames(
      "button btn",
      { [`btn-outline-${type}`]: outline },
      { [`btn-${type}`]: !outline },
      { [`btn-${size}`]: size },
      { "btn-block": block },
      className
    )}
    disabled={disabled}
    onClick={onClick}
    data-toggle={dataToggle}
    data-target={dataTarget}
    data-dismiss={dataDismiss}
  >
    {label && label}
  </button>
);

export default Button;
