import React from "react";
import Button from "elements/Button";
import IconText from "parts/IconText";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{width :350}}>
            <IconText />
            <p className="brand-tagline">
              We kaboom your beauty holiday instansly and memorable
            </p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">For Beginner</h6>
            <ul className="list-group list-gruop-flush">
              <li className="list-gruop-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-gruop-item">
                <Button type="link" href="/properties">
                  Start Booking a room
                </Button>
              </li>
              <li className="list-gruop-item">
                <Button type="link" href="/use-payment">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-gruop-flush">
              <li className="list-gruop-item">
                <Button type="link" href="/careers">
                  Careers
                </Button>
              </li>
              
              <li className="list-gruop-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              
              <li className="list-gruop-item">
                <Button type="link" href="/term">
                  Term & Conditions
                </Button>
              </li>
              
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-gruop-flush">
              <li className="list-gruop-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:suport@staycation.id"
                >
                  suport@staycation.id
                </Button>
                <li className="list-gruop-item">
                  <Button type="link" href="tel:+6202122081996">
                    021 - 2208 - 1996
                  </Button>
                </li>
                <li className="list-gruop-item">
                  <span>Staycation,Kemang,jakarta</span>
                </li>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2019 • All rights reserved • Staycation
          </div>
        </div>
      </div>
    </footer>
  );
}
