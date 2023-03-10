import React, {useState} from 'react';

const RestoForm = ({add}) => {

    const [newFastfood, setNewFastfood] = useState("");
    const [priceNewFastfood, setPriceNewFastfood] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        const id = new Date().getTime();
        const name = newFastfood;
        const price = priceNewFastfood;
        const nvResto = {id, name, price};

        add(nvResto);
        setNewFastfood("");
        setPriceNewFastfood("");
    }

    const handleChangeName = (event) => {
        setNewFastfood(event.target.value);
    }

    const handleChangePrice = (event) => {
        setPriceNewFastfood(event.target.value);
    }


    return (
        <div>
            <form action='submit' onSubmit={handleSubmit}>
                <input value={newFastfood} type="text" placeholder='Ajouter un resto' onChange={handleChangeName} />
                <input value={priceNewFastfood} type="number" placeholder='Ajouter un prix' onChange={handleChangePrice} />
                <button>Ajouter</button>
            </form>
        </div>
    );
};

export default RestoForm;