import Link from 'next/link';
import React from 'react';
import "./details.css";
import { useRouter } from "next/navigation";

const App = () => {
  const router = useRouter();
  const {
    query: { items }
  } = router;
  const parsedItems = items;

  return (
    <div id="header">
      <div id="container">
        <div className="left_side_content">
          <h1>{parsedItems}</h1>
          <h4>MATERIALS, CARE AND ORIGIN</h4>
          <h3>MATERIALS</h3>
          <p>
            We work with monitoring programmes to ensure compliance with safety,
            health and quality standards for our products.
          </p>
          <p>
            The Green to Wear 2.0 standard aims to minimise the environmental
            impact of textile manufacturing. To that end, we have developed
            Inditex’s The List programme, which helps guarantee both that
            production processes are
          </p>
          <p>View more</p>
        </div>
        <div className="image_div">
          <div className="product_name">
            <h2>CONTRAST PATCH JACKET</h2>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlxF6EZhPKz6EhL_9Zf3-E3nn6y-aDwf2jDnmfQmBdTZc7TtSM5zshsfsEboujZ_JJOmg&usqp=CAU"
              alt=""
            />
          </div>
          <p>
            Loose-fitting jacket with a ribbed collar. Long sleeves with elastic
            cuffs. Hip welt pockets and an inside pocket. Contrast patch appliqués
            on the front and back. Ribbed hem. Snap-button fastening on the front.
          </p>
          <p>₹ 6,990.00</p>
          <p>MRP incl. of all taxes</p>
        </div>
      </div>
      <div id="footer"></div>

      <div id="popup" className="popup none">
        <h1>CART</h1>
        <h1 className="X">X</h1>
        <div id="popupmain"></div>

        <a href="./shoppingBasket.html">
          <button>GO TO BASKET</button>
        </a>
      </div>
    </div>
  );
};

export default App;
