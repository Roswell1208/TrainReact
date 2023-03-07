import React, { useState } from 'react';

const Contact = () => {
// State
    const [compteur, setCompteur] = useState(1);
    // Le petit 1 dans le useState est la valeur par défaut de l'état donnée

// Comportement
    function addCompteur() {
        setCompteur(compteur + 1);
    }

// Affichage
    return (
        <div>
            <h1>Contact me</h1>
            <p>{compteur}</p>
            <button onClick={addCompteur}>Like</button>
        </div>
    );
};

export default Contact;