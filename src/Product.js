import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id, title, price, rating, image}) {
    const [{basket}, dispatch]= useStateValue();

    const addToBasket = () =>{
        dispatch({
            type: 'ADD_TO_BASKET',
            //key & value are same then just specify id instead of id:id
            item:{
                id,
                title,
                image,
                price,
                rating
            }
        })
    }
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {
                        Array(rating)
                        .fill()
                        .map((_)=>(
                            <p><span>⭐</span></p>
                        ))
                    }
                </div>
            </div>
            
            <img src={image} alt='product1' />
            <button onClick={addToBasket}>Add to Basket</button>

        </div>
    )
}

export default Product
