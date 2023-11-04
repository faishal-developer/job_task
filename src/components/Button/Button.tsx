import './Button.css';

//todo button spinner
type Iprops={
    type?:"button" | "submit" | "reset" | undefined;
    disabled_className?:string;
    className?:string;
    btnText?:string;
    onclickCallback?:()=>void;
    isLoading?:boolean;
    disabled?:boolean;
}
const Commonbutton = (props:Iprops) => {
    return (
        <button
            type={props.type ?? 'button'}
            onClick={props.onclickCallback}
            className={(props.isLoading || props.disabled) ? props.disabled_className : props.className}
            disabled={props.isLoading || props.disabled}
        >
            {/* button loader */}
            
            {props.btnText}
        </button>
    );
};

export default Commonbutton;
