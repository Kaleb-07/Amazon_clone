import React from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './Product.module.css';
import { Link } from 'react-router-dom';
import { Type } from '../../Utility/action.type.js'
import { DataContext } from '../DataProvider/DataProvider';
import { useContext } from 'react';
function ProductCard({ product, flex, renderDesc, renderAdd }) {

  const { image, title, id, rating, price, description } = product;

  const [state, dispatch] = useContext(DataContext);
  console.log(state)
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: product
    })
  }

  return (
    <div className={`${classes.card_container} ${flex ? classes.product_flexed : ''}`}>
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} className={classes.img_container} />
      </Link>

      <div>
        <h3>{title}</h3>
        {renderDesc && <div className={classes.description}>{description}</div>}
        <div className={classes.rating}>
          {rating ? (
            <>
              <Rating value={rating.rate} precision={0.1} readOnly />
              <small>({rating.count})</small>
            </>
          ) : (
            <span>No rating</span>
          )}
        </div>

        <div className={classes.price_container}>
          <CurrencyFormat amount={price} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png" alt="prime" className={classes.prime_logo} />
        </div>

        <div className={classes.delivery_info}>
          <p>Get it as soon as <b>Tomorrow, Feb 8</b></p>
          <p>FREE Shipping by Amazon</p>
        </div>
        {
          renderAdd && <div>
            <button className={classes.button} onClick={addToCart}>
              Add to cart
            </button>
          </div>
        }
      </div>
    </div>
  );
}

export default ProductCard;
