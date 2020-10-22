import React from 'react';
import '../assets/style/components/Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="container__title">Rick And Morty Character glossary</div>
                <div className="container__info">
                    <p>This work was made to training the asincronism in Javacscript.
                    Each character basic data is called with async/await tecnics to 
                    show a specific number of Rick and Morty characters by page, enjoy
                    and feel free to modify my work to practice too.</p>
                </div>
            </div>
        </div>
    );
}

export default Header;