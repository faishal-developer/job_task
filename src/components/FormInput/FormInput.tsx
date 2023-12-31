import { getErrorMessageByPropertyName,IInput } from "./input.type";
import { useFormContext, Controller } from "react-hook-form";
import {styles} from './styles';
import PasswordStrength from "../PasswordStrength/PasswordStrength";

const FormInput = ({
  name,
  type,
  value,
  placeholder,
  icon,
  defaultValue,
  from
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div className={styles.container}>
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
            <>
              <div className={`${styles.inputBox} ${errorMessage?'error':''}`}>
                  <img className={styles.img} src={icon} alt="icon"/>
                  <input
                    type={type}
                    className={styles.input}
                    placeholder={placeholder}
                    {...field}
                    defaultValue={defaultValue}
                    value={value ? value : field.value}
                  />
              </div>
              <small className="errorMessage">{errorMessage}</small>
              {(from && type==="password" && field.value) && <PasswordStrength password={field.value}/>}
            </>
        }
      />
    </div>
  );
};

export default FormInput;
