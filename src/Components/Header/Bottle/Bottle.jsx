import './Bottle.css'
const Bottle = ({ bottle, handleAddToCart }) => {
    const { name, img, price, id } = bottle;

    return (
        < div className="bottle">
            <h3>{name}</h3>
            <img src={img} alt="" />
            <p>price: {price}</p>
            <button onClick={() => handleAddToCart(bottle)}>Buy</button>
        </div >
    );
};

export default Bottle;