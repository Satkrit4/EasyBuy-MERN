import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Information Collection: We gather basic personal information, like your name, email, and payment details, to process your orders and improve your shopping experience.</p>
          <p>Data Usage: Your information is used to complete purchases, provide support, and send you relevant updates with your consent.</p>
          <p>Data Protection: We safeguard your personal data with advanced security measures to prevent unauthorized access.</p>
          <p>Third-Party Sharing: We don’t share your personal data with outside parties, except to fulfill orders or comply with legal requirements.</p>
          <p>Your Rights: You can access, update, or delete your personal information at any time by contacting us.</p>
          <p>Policy Updates: We may revise this policy occasionally. Significant changes will be posted on our website.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;