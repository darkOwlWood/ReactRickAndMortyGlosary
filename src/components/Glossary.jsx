import React from 'react';
import '../assets/style/components/Glossary.scss';
import GlossaryCard from './GlossaryCard';

const Glossary = ({charactersInfo}) => {
    return (
        <div className="glossary">
            {
                charactersInfo &&
                charactersInfo.map( (obj,ndx) => (
                    <GlossaryCard 
                        key={ndx}
                        name={obj.name}
                        image={obj.image}
                        status={obj.status} 
                        species={obj.species} 
                    />
                ))
            }
        </div>
    );
}

export default Glossary;