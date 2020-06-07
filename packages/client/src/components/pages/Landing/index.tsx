import React from "react";
import { useTranslation } from "react-i18next";
import "./Landing.scss";

const prices = [100, 50, 100, 120];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="wrapper">
          <p className="footer-text">{t("footer-text")}</p>
        </div>
      </div>
    </footer>
  );
};

const Landing = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <main>
        <section className="service">
          <div className="container">
            <div className="wrapper">
              <div className="service-image">
                <img className="service-image__img" src="/images/service-image.png" alt="NFC Визитки" />
              </div>
              <div>
                <div className="service-body">
                  <h1 className="service-body__title">{t("service-body__title")}</h1>
                  <p className="service-body__text">{t("service-body__text")}</p>
                  <button className="btn">{t("serviсe-btn")}</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="usage">
          <div className="container">
            <div className="wrapper">
              <h2 className="usage-title">{t("usage-title")}</h2>
              <div className="usage-items">
                <UsageItem index={0} />
                <UsageItem index={1} />
                <UsageItem index={2} />
                <UsageItem index={3} />
              </div>
            </div>
          </div>
        </section>
        <section className="innovations">
          <div className="container">
            <div className="wrapper">
              <div className="innovations-body">
                <h2 className="innovations-body__title">{t("innovations-body__title")}</h2>
                <p className="innovations-body__text">{t("innovations-body__text")}</p>
                <button className="btn">{t("innovations-btn")}</button>
              </div>
              <div className="innovations-image">
                <img
                  className="innovations-image__img"
                  src="/images/innovations-image.png"
                  alt="Пример страницы профиля"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="image">
          <div className="container">
            <div className="wrapper">
              <img className="image-img" src="/images/hands-image.png" alt="NFC визитка" />
            </div>
          </div>
        </section>
        <section className="cards">
          <div className="container">
            <nav className="wrapper">
              <Card index={0} />
              <Card index={1} />
              <Card index={2} />
              <Card index={3} />
            </nav>
          </div>
        </section>
        <section className="gadgets">
          <div className="container">
            <div className="wrapper">
              <h2 className="gadgets-title">{t("gadgets-title")}</h2>
              <p className="gadgets-text">{t("gadgets-text")}</p>
              <div className="gadgets-items">
                <div className="gadgets-items__android">
                  <img className="gadgets-items__img" src="/images/gadgets-android.svg" alt="android" />
                  <p className="gadgets-items__text">{t("gadgets-items__android")}</p>
                </div>
                <div className="gadgets-items__iphone">
                  <img className="gadgets-items__img" src="/images/gadgets-iphone.svg" alt="iphone" />
                  <p className="gadgets-items__text">
                    {t("gadgets-items__iphone") + " "}
                    <a
                      className="gadgets-items__link"
                      href="https://apps.apple.com/us/app/nfc-taginfo-by-nxp/id1246143596"
                    >
                      {t("gadgets-items__iphone__link")}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="questions">
          <div className="container">
            <div className="wrapper">
              <h3 className="questions-title">{t("questions-title")}</h3>
              <p className="questions-text">{t("questions-text")}</p>
            </div>
          </div>
        </section>
        <section className="landing-contacts">
          <div className="container">
            <div className="wrapper">
              <div className="landing-contacts-item">
                <div className="landing-contacts-item__image">
                  <img src="/images/contacts-mail.svg" alt="mail" />
                </div>
                <a className="landing-contacts-item__link" href="mailto:sale@passment.com.ua">
                  sale@passment.com.ua
                </a>
              </div>
              <div className="landing-contacts-item">
                <div className="landing-contacts-item__image">
                  <img src="/images/contacts-vodafone.svg" alt="vodafone" />
                </div>
                <a className="landing-contacts-item__link" href="tel:+380956048995">
                  +380956048995
                </a>
                <img src="/images/contacts-telegram.svg" className="landing-contacts-additional" alt="telegram" />
                <img src="/images/contacts-viber.svg" className="landing-contacts-additional" alt="viber" />
                <img src="/images/contacts-watsapp.svg" className="landing-contacts-additional" alt="watsapp" />
              </div>
              <div className="landing-contacts-item">
                <div className="landing-contacts-item__image">
                  <img src="/images/contacts-kievstar.svg" alt="kievstar" />
                </div>
                <a className="landing-contacts-item__link" href="tel:+380970101725">
                  +380970101725
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

interface CardProps {
  index: number;
  onOrder?: () => void;
}

const Card: React.FC<CardProps> = ({ index, onOrder }) => {
  const { t } = useTranslation();
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-image">
          <img className="card-image__img" src={`/images/card-image-${index + 1}.png`} alt="Продукт PassMent" />
        </div>
        <h3 className="card-title">{t("card-title", { returnObjects: true })[index]}</h3>
        <p className="card-text">{t("card-text", { returnObjects: true })[index]}</p>
        <p className="card-price">
          {t("card-price", { returnObjects: true })[index][0]}
          <span className="card-price__bold">{` ${prices[index]} `}</span>
          {t("card-price", { returnObjects: true })[index][1]}
        </p>
        <button className="btn" onClick={onOrder}>
          {t("card-btn")}
        </button>
      </div>
    </div>
  );
};

const UsageItem: React.FC<{ index: number }> = ({ index }) => {
  const { t } = useTranslation();

  return (
    <div className="usage-items__item">
      <div className="item-number">{index + 1}</div>
      <div className="item-text">
        <p>{t("usage-items", { returnObjects: true })[index]}</p>
      </div>
    </div>
  );
};

export default Landing;
