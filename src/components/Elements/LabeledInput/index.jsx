/* eslint-disable react/prop-types */
import Input from "./input";
import Label from "./label";

// const LabeledInput = (props) => {
//   const { label, name, type, placeholder } = props;
//   return (
//     <>
//       <Label htmlFor={name}>{label}</Label>
//       <Input name={name} type={type} placeholder={placeholder} />
//     </>
//   );
// };

const LabeledInput = ({ label, name, type, placeholder, register }) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        register={register}
      />
    </>
  )
}

export default LabeledInput;
