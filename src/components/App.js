import React from 'react';
import Header from './header/Header';
import RakeBack from './rakeback/RakeBack';
import Example from './example/example';
import Userflow from './userflow/userflow';
import Notes from './notes/notes';
import Games from './games/games';
import Offers from './offers/offers';

const App = () => (
    <>
        <div id="banner"></div>
        <Header/>
        <RakeBack/>
        <Example/>
        <Userflow/>
        <Notes/>
        <Games/>
        <Offers/>
    </>
);

export default App;