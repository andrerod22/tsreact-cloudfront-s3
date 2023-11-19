import React, { useEffect, useState } from 'react';

const ItemList: React.FC = () => {
    interface Item {
        id: number;
        name: string;
        age: number;
    }
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        fetch('/data.json')
            .then((response) => response.json())
            .then((data) => setItems(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    
    return(
        <div>
            <h2>Item List</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <strong>{item.name}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;