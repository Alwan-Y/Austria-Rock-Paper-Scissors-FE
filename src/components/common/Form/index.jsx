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
}) => (
  <div className="form-group">
    <label htmlFor={htmlFor}>{label}</label>
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
