import './countrry.css'
const Countrry = ({countrry}) => {
    const {name ,flags}=countrry
    return (
        <div className="countrry">
            <p>{name?.common}</p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Countrry;