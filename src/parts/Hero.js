import React from "react";
import ImageHero from "assets/images/heroimg.jpg";
import ImageHeroFrame from "assets/images/heroimgframe.jpg";
import IconTravel from "assets/images/icons/icon_traveler.svg";
import IconCities from "assets/images/icons/icon_cities.svg";
import IconsTreasure from "assets/images/icons/icon_treasure.svg";
import formatNumber from "utils/formatNumber";
import Button from "elements/Button";
export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: (props.refMostPicked.current.offSeTop = 30),
      behavior: "smooth",
    });
  }
  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className=" font-weight-bold line-height-1 mb-3">
            Forget Busy Work,
            <br />
            Start Next Vacation
          </h1>
          <p
            className="mb-5 font-weight-light text-gray-500 w-75"
            style={{ lineHeight: "170%" }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>
          <div className="row" style={{ marginTop: 80 }}>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src={IconTravel}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.travelers)}{" "}
                <span className="text-gray-500 font-weigth-light">
                  travelers
                </span>
              </h6>
            </div>

            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src={IconsTreasure}
                alt={`${props.data.treasures} Treasure`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.treasures)}{" "}
                <span className="text-gray-500 font-weigth-light">
                  treasures
                </span>
              </h6>
            </div>

            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={IconCities}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.cities)}{" "}
                <span className="text-gray-500 font-weigth-light">cities</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-6 pl-5">
          <div style={{ width: 520, height: 410, position: "relative" }}>
            <img
              src={ImageHero}
              alt="room with couches"
              className="img-fluid position-absolute"
              style={{
                margin: "-30px 0 0 -30px",
                zIndex: 1,
              }}
            />
            <img
              src={ImageHeroFrame}
              alt="room with couches frame"
              className="img-fluid position-absolute"
              style={{
                margin: "-0 -15px -15px 0",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
