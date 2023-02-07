import React from 'react'

const ProductCart = (props) => {
    const { filteredItems, productItems, addToCartHandler } = props;

    return (
        <section className='container'>
            {filteredItems.length ?
                filteredItems.map(ele => (
                    <div className='CartContainer' key={ele.id}>
                        <div className='CartImage'>
                            <img src={ele.imageURL} alt='cartimage' />
                        </div>
                        <div>{ele.name}</div>
                        <div className='CartDetails'>
                            <div className='CartPrice'>Rs {ele.price}</div>
                            <button
                                className={ele.quantity === 0 ? 'outOfStockBtn' : 'CartButton'}
                                onClick={() => addToCartHandler(ele.imageURL, ele.name, ele.price, ele.quantity, ele.id)}>
                                {ele.quantity === 0 ? "Out of Stock" : "Add to cart"}
                            </button>
                        </div>
                    </div>
                )) :
                productItems.map(ele => (
                    <div className='CartContainer' key={ele.id}>
                        <div className='CartImage'>
                            <img src={ele.imageURL} alt='cartimage' />
                        </div>
                        <div>{ele.name}</div>
                        <div className='CartDetails'>
                            <div className='CartPrice'>Rs {ele.price}</div>
                            <button
                                className={ele.quantity === 0 ? 'outOfStockBtn' : 'CartButton'}
                                onClick={() => addToCartHandler(ele.imageURL, ele.name, ele.price, ele.quantity, ele.id)}>
                                {ele.quantity === 0 ? "Out of Stock" : "Add to cart"}
                            </button>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default ProductCart