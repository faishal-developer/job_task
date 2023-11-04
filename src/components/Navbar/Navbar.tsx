import image from "../../assets/Group5.png";
import Language from "../Language/Language";
import { styles } from "./styles";

const LoginNavbar = () => {
    return (
        <div className={styles.continer}>
            <figure>
                <img src={image} alt="logo"/>
            </figure>
            <div>
                <Language/>
            </div>
        </div>
    );
};

export default LoginNavbar;