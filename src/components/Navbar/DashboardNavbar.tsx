import { styles } from "./styles";
import searchIcon from '../../assets/search.png';
import user from "../../assets/User.png";
import notification from "../../assets/notification-bell.png";

const DashboardNavbar = () => {
    return (
        <div className={styles.continer2}>
            <div className={styles.search}>
                <input className={styles.input} type="text"/>
                <img className={styles.icons} src={searchIcon}/>
            </div>
            <div className={styles.user}>
                <img className={styles.notification} src={notification} alt="user"/>
                <img src={user} alt="user"/>
            </div>
        </div>
    );
};

export default DashboardNavbar;