const Boton = ({texto, onclick}) => {
    
    return (
        <button onClick={onclick}>
        {texto}
        </button>
    );
};

export default Boton;