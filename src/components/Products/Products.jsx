import './Products.css'


const Products = (props) => {

    const { img, name, seller, ratings, price } = props.product;
    const { handleAddToCart } = props;


    return (
        <div className="product">
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <h3>Price: {price}</h3>
                <p>Manufracturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} >Add To Cart</button>
        </div>
    );
};

export default Products;
