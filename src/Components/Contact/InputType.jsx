function InputType({ type,placeholder}){
    return(
        <>
            <input type={type}
                placeholder={placeholder}
                className={`${placeholder==="Your Message"?"p-10":"p-4"} border border-gray-70 rounded-2xl `}
            />
        </>
    )
}

export default InputType;