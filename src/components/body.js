import React from "react";

import image1 from "../images/market.jpg";
import image2 from "../images/make-money.jpg";
import image3 from "../images/weigh.jpg";

function Body() {
  return (
    <div className="body">
      <section className="front-banner">
        <strong>Let's sell for you</strong>
      </section>

      <section className="services">
        <h1>SERVICES</h1>
        <h4 style={{ color: "lightgrey" }}>
          Online retail services you can trust
        </h4>
      </section>

      <section className="features">
        <div>
          <div className="column">
            <img src={image1} alt="sell on multiple market places"></img>
            <h2 style={{ textAlign: "center", color: "black" }}>
              Earn Across Multiple Markets
            </h2>

            <p>
              From product sourcing, to warehousing, packaging,fulfillment,
              inventory management and customer service, we got you all covered!
              Our team of retail experts handle the A-Z of retailing for you.
              All you have to do is hand us your retail-startup capital while we
              do the rest for just 25% of reported earnings!
            </p>
          </div>

          <div className="column">
            <img src={image2} alt="make money retailing"></img>
            <h2 style={{ textAlign: "center", color: "black" }}>
              We Make Money On Your Behalf!
            </h2>
            <p>
              With Seller Express Services, you grow alternative source of
              income while saving your time for the things that matter most to
              you. The Net income from sales would be distributed at the end of
              every month. With this you can be sure that your next income is
              right away! We're simply here to serve you!
            </p>
          </div>

          <div className="column">
            <img src={image3} alt="judge us by our performance"></img>
            <h2 style={{ textAlign: "center", color: "black" }}>
              Judge Us By Our Performance
            </h2>

            <p>
              Our detailed reports will enable you to monitor your monthly,
              quarterly and yearly earnings rate and judge us by our
              performance.  We're simply here to serve you
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;
