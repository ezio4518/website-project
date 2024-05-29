import React from 'react'
import './ProductDisplay.css'
import star_icon from "../../assets/star_icon.png"
import star_dull_icon from "../../assets/star_dull_icon.png"

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className='productdisplay-right-star'>
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-dispcription">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore commodi fugit, aliquid accusamus, culpa inventore similique expedita autem corrupti molestias unde minus eaque dicta provident magnam reiciendis doloremque porro sed?
            </div>
            <div className="productdisplay-right-size">
                <p>Size</p>
                <div className="productdisplay-right-size-list">
                    <p>XS</p>
                    <p>S</p>
                    <p>M</p>
                    <p>L</p>
                    <p>XL</p>
                </div>
            <div />
            <button>ADD TO CART</button>
            
        </div>
    </div>
  )
}

export default ProductDisplay