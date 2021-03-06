import React from 'react';

const Notes = () => (
    <div className="notes">
        <div className="container notes__container">
            <div className="notes__wrapper">
                <h2 className="notes__title">გაითვალისწინე</h2>
                <ul className="notes__list">
                    <li>საწყის ეტაპზე ყველა მოთამაშეს ენიჭება პირველი დონე, ანუ იღებს 10%-იან რეიკბექს.</li>
                    <li>მოთამაშე რანგს იღებს მინიმუმ 1 თვის ვადით.</li>
                    <li>რანგის გასაზრდელად მოთამაშემ თვის ჭრილში (1 რიცხვიდან მომდევნო თვის 1 რიცხვამდე) უნდა დააგროვოს სასურველი რანგის შესაბამისი რეიკ ქულების რაოდენობა.</li>
                    <li> მოთამაშეს შეუძლია თვის განმავლობაში რამდენჯერმე აიმაღლოს რანგი, მთავარია დააგროვოს საკვალიფიკაციო რეიკ ქულები.</li>
                    <li>თუ მოთამაშე გადადის შემდეგ რანგზე, ის ავტომატურად იღებს გაზრდილ რეიკბექს.</li>
                    <li>თვის ბოლოს არსებული სტატუსი აქტიური იქნება შემდეგი თვის განმავლობაში. </li>
                    <li>თვის ბოლოს მოპოვებული სტატუსი აქტიურია მომდევნო თვის განმავლობაში. - მაგ. აპრილში თვის ბოლოს მიღებული მე-2 რანგი მოთამაშეს შეუნარჩუნდება მაისის თვეშიც.</li>
                    <li>სტატუსის შესანარჩუნებლად აუცილებელია მომხმარებელმა შემდეგ თვეშიც დააგროვოს რეიკ ქულების საჭირო რაოდენობა, წინააღმდეგ შემთხვევაში ის გადაინაცვლებს თვის ჭრილში დაგროვებული რეიკ ქულების შესაბამის რანგზე. </li>
                </ul>
                <div className="dice-top">
                    <img src="/img/dice-top.png" />
                </div>
                <div className="dice-bottom">
                    <img src="/img/dice-bottom.png" />
                </div>
            </div>
        </div>
    </div>
);

export default Notes;