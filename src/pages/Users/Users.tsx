import Pagination from "../../components/CustomPagination/Custompagination";
import UseUserLogic from "./Users.logic";
import { styles } from "./styles";

type IUser={
    first_name:string;
    last_name:string;
    avatar:string;
    id:string;
    email:string;
}
const Users = () => {
    const {page,setPage,data} = UseUserLogic();
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Users List</h2>
            <table className={styles.table}>
                    
                <tbody>
                    <tr className={styles.tr}>
                        <td className={styles.tdFirst}>#ID</td>
                        <td className={styles.td}>USER</td>
                        <td className={styles.td}>EMAIL</td>
                        <td className={styles.tdLast}>OPTIONS</td>
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