import React from 'react';

const Header = () => (
    <header className="header">
        <div className="container--large">
            <div className="header__row">
                <figure className="header__logo">
                    <img src="/img/logo.png" alt="Europebet Logo" />
                </figure>
                <span className="header__lang">
                    <img src="/img/eng.jpg" alt="Great Britian Flag" />
                    eng
                </span>
            </div>
            <section className="banner-text">
                <h1 className="banner-text__title">ისარგებლე გაუმჯობესებული რეიკბექით</h1>
                <span className="banner-text__cat">მაგიდის თამაშები</span>
                <article className="banner-text__description">დააგროვე რეიკ ქულები და მიიღო 50%-მდე რეიკბექი ნებისმიერ დროს</article>
                <button className="btn btn--green">ითამაშე</button>
            </section>
        </div>
    </header>
);

export default Header;