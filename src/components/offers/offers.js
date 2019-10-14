import React from 'react';

const Offers = () => (
    <div className="offers">
        <div className="container offers__container">
            <header className="offers__title">other offers</header>
            <div className="offers__wrapper">
                <section className="offer">
                    <figure className="offer__image">
                        <img src="/img/freebet.png" />
                    </figure>
                    <article>
                        <p>Get unlimited freebets</p>
                        <p>Only on Europebet</p>
                        <button className="btn btn--orange">learn more</button>
                    </article>
                </section>
                <section className="offer">
                    <figure className="offer__image">
                        <img src="/img/cashout.png" />
                    </figure>
                    <article>
                        <p>Use the cashout function</p>
                        <p>Stop the slip at the desired time and receive a guaranteed amount</p>
                        <button className="btn btn--orange">learn more</button>
                    </article>
                </section>
            </div>
        </div>
    </div>
);

export default Offers;