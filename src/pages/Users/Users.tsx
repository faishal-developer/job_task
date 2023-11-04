import Pagination from "../../components/CustomPagination/Custompagination";
import { setTitle } from "../../helper/LocalStorgeMS";
import UseUserLogic from "./Users.logic";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";

type IUser={
    first_name:string;
    last_name:string;
    avatar:string;
    id:string;
    email:string;
}
const Users = () => {
    const {page,setPage,data} = UseUserLogic();
    const {t}=useTranslation()

    setTitle('Stack | Users')
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>{t('auth.Users_List')}</h2>
            {/* user table */}
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.tr}>
                        <td className={styles.tdFirst}>#{t('auth.ID')}</td>
                        <td className={styles.td}>{t('auth.USER')}</td>
                        <td className={styles.td}>{t('auth.EMAIL')}</td>
                        <td className={styles.tdLast}>{t('auth.OPTIONS')}</td>
                    </tr>
                    {
                        data?.data ? (
                            data?.data?.map((item:IUser)=>(
                                <tr>
                                    <td className={styles.tdescription}>{item.id}</td>
                                    <td className={styles.imgbox}>
                                        <img className={styles.img}  src={item.avatar}/>
                                        {item.first_name} {item.last_name}
                                    </td>
                                    <td className={styles.tdescription}>{item.email}</td>
                                    <td className="font-bold ps-3">...</td>
                                </tr>
                            ))
                        ):''
                    }
                </tbody>
            </table>
            <Pagination
                onPageChange={()=>{}}
                currentPage={page}
                setCurrentPage={setPage}
                totalPage={data?.total_pages}
            />
        </div>
    );
};

export default Users;