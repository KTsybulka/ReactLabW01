type HeaderProps = {
    title : string;
    total : number;
}

function Header({title, total} : HeaderProps) {
    return(
        <>
            <h1>{title}</h1>
            <h2>Total Number of Task: {total}</h2>        
        </>
    )
}

export default Header;




