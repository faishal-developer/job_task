/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation } from "react-router-dom";
import { useSidebarItems } from "./SideBarItems.utils";
import { styles } from "./styles";
import image from "../../assets/Group5.png";

const DashboardSidebar = () => {
    const location=useLocation();
    const items=useSidebarItems();

    console.log(location)
    return (
        <div className={styles.mainContainer}>
            <div className={styles.sideContainer}>
                <Link to={'/admin/users'}>
                    <figure className={styles.logo}>
                    <img src={image} alt="logo"/>
                </figure>
                </Link>
                <p className={styles.side_p}>PAGES</p>
                <div className={styles.side_items}>
                    {
                        items?.map((item:any)=>(
                            <Link className={`${styles.side_item} ${location.pathname===item.route?'active':''}`} to={item.route}  key={item.id}>
                                <img className={styles.side_img} src={item.icon} alt={item.title}/>
                                <p className={styles.side_i_p}>{item.title}</p>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default DashboardSidebar;