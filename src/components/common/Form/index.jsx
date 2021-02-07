const Form = ({
  htmlFor,
  label,
  type,
  id,
  placeholder,
  value,
  onChange,
  onClick,
  className,
  classNameLabel,
}) => (
  <div className="form-group">
    <label className={classNameLabel} htmlFor={htmlFor}>
      {label}
    </label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onClick={onClick}
      className={className}
    />
  </div>
);

export default Form;
