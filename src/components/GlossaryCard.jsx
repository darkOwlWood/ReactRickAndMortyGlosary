import React from 'react';
import '../assets/style/components/GlossaryCard.scss';

const GlossaryCard = () => {
    return (
        <div className="glossary-card">
            <span className="glossary-card__status">None</span>
            <div className="glossary-card__image"></div>
            <div className="glossary-card__description">
                <span className="glossary-card__name"></span><br/>
                <span className="glossary-card__dimension"></span>
            </div>
        </div>
    );
}

export default GlossaryCard;