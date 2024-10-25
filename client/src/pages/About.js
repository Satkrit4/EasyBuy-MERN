import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - EasyBuy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          At EasyBuy, we believe that shopping should be a seamless and enjoyable experience. Our platform is designed to bring you a wide range of high-quality products at competitive prices, all from the comfort of your home. Whether you're looking for the latest tech gadgets, fashionable apparel, or everyday essentials, EasyBuy has something for everyone. We pride ourselves on our user-friendly interface, secure payment options, and fast, reliable delivery. Our dedicated customer support team is always ready to assist you, ensuring that your shopping experience with us is nothing short of exceptional. At EasyBuy, we make it easy to buy what you love.  
  
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;