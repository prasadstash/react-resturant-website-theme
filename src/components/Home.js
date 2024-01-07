import React from "react";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>
          Delicious <span>Bowls</span>
          </h3>
          <h3>
          Delivered to your <span>Soul!</span>
          </h3>
          <p>
          Elevating your dining experience with a symphony of flavors, served exclusively in delightful bowls. Discover culinary joy online!
          </p>
          <a href="https://www.zomato.com/pune/the-bowl-licious-baner" className="btn">
            Zomato
          </a>
          
          <a href="https://www.swiggy.com/restaurants/the-bowl-licious-gaonthan-baner-pune-803715" className="btnSwiggy">
            Swiggy
          </a>

          <a href="https://rawfoodsandbeverages.petpooja.com/orders/menu" className="btn">
            Take Away
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
