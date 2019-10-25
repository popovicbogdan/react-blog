import React from "react";

const Footer = () => {
  return (
    <div className="divfoot">
      <div>
        <div className="container-fluid" id="blue">
          <div className="container">
            <ul className="bluelist">
              <div className="row ul">
                <li className="col blue-item">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  doloremque, a quibusdam similique et, distinctio unde
                </li>
                <li className="col  blue-item">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  doloremque, a quibusdam similique et, distinctio unde
                </li>
                <li className="col  blue-item">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  doloremque, a quibusdam similique et, distinctio unde
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="container">
          <p id="topfoot">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            voluptatibus sit optio, eum reprehenderit molestiae nisi? Ducimus,
            debitis! Quasi quam alias eius dolores blanditiis tempore porro
            architecto, perferendis rerum reiciendis!
          </p>
        </div>
      </div>
      <div className="footer">
        <a href="https://www.instagram.com/" className="foot">
          <small>Instagram</small>
        </a>
        <a href="https://rs.linkedin.com/" className="foot">
          <small>LinkedIn</small>
        </a>
        <a href="https://www.facebook.com/" className="foot">
          <small>Facebook</small>
        </a>
      </div>
    </div>
  );
};

export default Footer;
