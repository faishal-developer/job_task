import Style from './CustomPageLoader.module.scss';

type Iprops={
    pageLoader?:boolean;
    className?:string;
    default?:boolean;
}
export default function CustomPageLoader(props:Iprops) {

    return (
        props.pageLoader ? <>
            <div className={`${Style.overlayed}`} />
            <div className={`rotate dotted ${Style.loader} ${props.className}`} />
            {/*<img src={ctSmallLogo} alt="" className={`${Style.loadinglogoct} ${props.className}`}/>*/}
        </> : props.default ? <div className={`${Style.defaultDesign}`}><span className={`${Style.rotate} ${Style.dotted}`} /></div> : ""
    );
}
