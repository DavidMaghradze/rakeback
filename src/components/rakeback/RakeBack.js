import React from 'react';
import RakebackStatus from './RakebackStatus/RakebackStatus';

const RakeBack = () => (
    <div className="rakeback">
        <div className="container">
            <div className="rakeback__wrapper">
                <div className="rakeback__grid">
                    <div className="rakeback__steps">
                        <section className="rakeback__step">
                            <h2 className="rakeback__step-title">ითამაშე</h2>
                            <article className="rakeback__step-description">ითამაშე ნარდი, ბურა და დომინო</article>
                        </section>
                        <section className="rakeback__step">
                            <h2 className="rakeback__step-title">დააგროვე</h2>
                            <article className="rakeback__step-description">მიიღე რეიკ ქულები მაგიდის თამაშებში</article>
                            <span className="rakeback__step-instruction">100 რეიკ ქულა = 1ლ</span>
                        </section>
                        <section className="rakeback__step">
                            <h2 className="rakeback__step-title">გაზარდე რანგი</h2>
                            <article className="rakeback__step-description">გადადი უფრო მაღალ რანგზე და მიიღე კიდევ უფრო მაღალი რეიკბექი</article>
                        </section>
                        <section className="rakeback__step">
                            <h2 className="rakeback__step-title">გაანაღდე</h2>
                            <article className="rakeback__step-description">გადაცვალე დაგროვებული რეიკ ქულები ნაღდ ფულში ნებისმიერ დროს</article>
                            <p>მინიმალური გასანაღდებელი თანხა</p>
                            <span className="rakeback__step-instruction">20 რეიკ ქულა = 0.2ლ</span>
                        </section>
                    </div>
                    <RakebackStatus/>
                </div>
                <button className="btn btn--green">ითამაშე</button>
            </div>
        </div>
    </div>
);

export default RakeBack;