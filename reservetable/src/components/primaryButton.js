function PrimaryBtn(props){
    return(
        <>
            <button type="button">
                {props.children}
            </button>
        </>
    )
}

export default PrimaryBtn;