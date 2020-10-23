import React from 'react';
import '../assets/style/components/GlossaryCard.scss';

const GlossaryCard = ({name,image,status,species}) => {

    const statusClass = 'Alive'===status? 'glossary-card__status--alive'
                       :'Dead' ===status? 'glossary-card__status--dead'
                       :'Unknown' ===status? 'glossary-card__status--unknown'
                       : '';

    const style = { 
        backgroundImage: `url(${image})`,
    }

    return (
        <div className="glossary-card">
            <span className={`glossary-card__status ${statusClass}`}>{status? status : 'None'}</span>
            <div className="glossary-card__image" style={style}></div>
            <div className="glossary-card__description">
                <span className="glossary-card__name">{name}</span><br/>
                <span className="glossary-card__species">{species}</span>
            </div>
        </div>
    );
}

export default GlossaryCard;