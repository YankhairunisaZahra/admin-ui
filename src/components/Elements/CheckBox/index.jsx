import { useMode } from "../../../context/modeContext";

/* eslint-disable react/prop-types */
const CheckBox = (props) => {
  const { label, name } = props
  const { isDarkMode } = useMode();

  return (
    <>
      <input
        type="checkbox"
        className="text-sm accent-primary"
        name={name}
        id={name}
      />
      <label htmlFor={name} className={`text-sm ms-6 ${isDarkMode ? "text-white-01" : "text-gray-01"}`}>
        {label}
      </label>
    </>
  )
}

export default CheckBox