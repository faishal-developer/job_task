import './PageLoader.css';

type Iprops={
    pageLoader?:boolean;
    className?:string;
    default?:boolean;
}
export default function CustomPageLoader(props:Iprops) {

    return (
        props.pageLoader ? <>
            <div className={`overlayed`} />
            <div className={`rotate dotted loader ${props.className}`} />
            {/*<img src={ctSmallLogo} alt="" className={`loadinglogoct ${props.className}`}/>*/}
        </> :  <div className={`defaultDesign`}><span className={`rotate dotted`} /></div>
    );
}
