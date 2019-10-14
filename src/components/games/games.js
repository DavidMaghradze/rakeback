import React from 'react';

const Games = () => (
    <div className="games">
        <div className="container games__container">
            <div className="games__grid">
                <section className="game game--backgammon">
                    <figure className="game__image">
                        {/* <img src="" alt="backgammon image" /> */}
                    </figure>
                    <div className="game__title game__title--backgammon">ნარდი</div>
                </section>
                <section className="game game--domino">
                    <figure className="game__image">
                        {/* <img src="" alt="domino image" /> */}
                    </figure>
                    <div className="game__title game__title--domino">დომინო</div>
                </section>
                <section className="game game--cards">
                    <figure className="game__image">
                        {/* <img src="" alt="cards image" /> */}
                    </figure>
                    <div className="game__title game__title--cards">ბურა</div>
                </section>
            </div>
        </div>
    </div>
);

export default Games;