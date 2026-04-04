import './FormGroup.scss';

const FormGroup = ({ label, placeholder, value, onChange, type = "text" }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        id={label}
        name={label}
        placeholder={placeholder}
        required
        autoComplete={type === "password" ? "current-password" : type === "email" ? "email" : "off"}
      />
    </div>
  );
};

export default FormGroup;
