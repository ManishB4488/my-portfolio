function Button({
    children,
    variant="primary"
}) {

const base =
"px-7 py-3 rounded-xl duration-300";

const styles = {

primary:

"bg-cyan-500 hover:scale-105",

secondary:

"border border-gray-600 hover:border-cyan-500"

};

return(

<button className={`${base} ${styles[variant]}`}>

{children}

</button>

)

}

export default Button;