import React from 'react';

const Example = () => (
    <div className="example">
        <div className="container">
            <h3 className="example__title">მაგალითი</h3>
            <div className="example__grid">
                <div className="example__steps">
                    <header className="example__steps-header">
                        <section className="example__step">
                            <p className="example__step-title">rake</p>
                            <div className="example__step-rake">
                                <span>50₾</span>
                                <img src="/img/next-step.png" />
                            </div>
                        </section>
                        <section className="example__step">
                            <p className="example__step-title">level</p>
                            <div className="example__step-level">
                                <span className="level">1</span>
                                <img src="/img/next-step.png" />
                            </div>
                        </section>
                        <section className="example__step">
                            <p className="example__step-title">rakeback</p>
                            <div className="example__step-rakeback">
                                <span>50₾*10%=<strong>5₾</strong></span>
                                <img src="/img/next-step.png" />
                            </div>
                        </section>
                        <section className="example__step">
                            <p className="example__step-title">ქულები</p>
                            <div className="example__step-points">
                                <span>500 ქულა</span>
                            </div>
                        </section>
                    </header>
                    <article className="example__steps-description">
                        მოთამაშემ აპრილის განმავლობაში გამოიმუშავა 50₾-ის რეიკი ნარდისა და დომინოს თამაშით. რადგან 50₾-ის რეიკით მოთამაშე არის 1 რანგზე, აქვს 10%-იანი რეიკბექი. ის მიიღებს 50₾*10%=5₾ რეიკბექს // 500 რეიკ ქულას. 
                    </article>
                </div>
                <div className="example__description">
                    <article>
                        მოთამაშემ თვის განმავლობაში თუ დააგროვა 1 000 რეიკ ქულა, ის გადავა მეორე რანგზე და მიიღებს 15%-იან რეიკბექს. მოთამაშეს დაგროვებული ქულებით, ნებისმიერ დროს, შეუძლია გაანაღდოს მინიმუმ 0.2₾ და მაქსიმუმ 50₾.
                    </article>
                </div>
            </div>
        </div>
    </div>
);

export default Example;