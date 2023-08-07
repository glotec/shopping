import React, { useContext } from "react";
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from "./Items";

import { CartContext } from "./Cart";

const ContextCart = () => {
    // const [item, setItem] = useState(products);
    const { item } = useContext(CartContext);

  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>
        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" className="arrow-icon" />
          <p>7</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">7</span> items
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((currentItem) => {
                return <Items key={currentItem.id} {...currentItem} />;
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>
            Cart Total: <span>20000000fc</span>
          </h3>
          <button>Checkout</button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
