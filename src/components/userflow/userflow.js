import React from 'react';

const Userflow = () => (
    <div className="userflow">
        <div className="container userflow__container">
            <article className="userflow__title">
                რეიკ ქულების შემოწმება და ნაღდ ფულში გადაცვლა თამაშის ლობიშია შესაძლებელი 
            </article>
            <section className="userflow__user">
                <div className="userflow__user-wrapper">
                    <section className="userflow__user-info">
                        <figure className="userflow__user-image">
                            <img src="/img/user.png" alt="user icon" />
                        </figure>
                        <p className="userflow__user-name">username</p>
                    </section>
                    <nav className="userflow__nav">
                        <ul>
                            <li className="active">რეიკბექი</li>
                            <li>ისტორია</li>
                            <li>პარამეტრები</li>
                        </ul>
                    </nav>
                </div>
            </section>
        </div>
    </div>
);

export default Userflow;