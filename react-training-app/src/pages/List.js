import React, { useState } from 'react';

const List = () => {
// State
    const [fastfood, setFastfood] = useState([
        {id: 1, name: 'Macdo', price: 5},
        {id: 2, name: 'KFC', price: 4},
        {id: 3, name: 'Burger King', price: 3},
        {id: 4, name: 'Quick', price: 2},
    ]);

// Comportement
    const deleteItem = (id) => {
        // Etape 1 : Copie
        const copieFastfood = fastfood.slice();
        // ou const copieFastfood = [...fastfood];

        // Etape 2 : Manipulation
        const fastfoodUpdate = copieFastfood.filter(
            (fastfood) => fastfood.id !== id
            );

        // Etape 3 : Mise à jour du state
        setFastfood(fastfoodUpdate);

        alert('Fastfood supprimé')
    }

// Affichage
    return (
        <div>
            <h1>Liste de nos fast food</h1>
            <ul>
                {fastfood.map((fastfood) => (
                    <li>
                        {fastfood.name} - {fastfood.price}€
                        <button onClick={() => deleteItem(fastfood.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;