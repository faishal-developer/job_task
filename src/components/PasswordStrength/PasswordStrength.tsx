import {passwordStrength} from "check-password-strength";
import { style } from "./styles";

export const values={
    "Too weak":1,
    "Weak":2,
    "Medium":3,
    "Strong":4,
}

type Istring="Too weak" |"Weak" |"Medium" |"Strong"

const PasswordStrength = (props:{password:string}) => {
    const {password} =props;

    const isTrue=(id:number):string=>{
        const str:Istring = passwordStrength(password).value as Istring;
        if(values[str]>id) return "bg-secondary-bar"
        else return ""
    }
    return (
        <div className="flex my-5">
            <div className={`${style.bar} bg-secondary-bar` }></div>
            <div className={`${style.bar} ${isTrue(1)}` }></div>
            <div className={`${style.bar} ${isTrue(2)}` }></div>
            <div className={`${style.bar} ${isTrue(3)}` }></div>
            {/* <div className={`${style.bar} ${isTrue(4)}` }></div> */}
        </div>
    );
};

export default PasswordStrength;