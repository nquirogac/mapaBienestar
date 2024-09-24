/* eslint-disable react/prop-types */
import React from 'react';

function SideMenu({ selectedCategories, updateCategory }) {
    return (
        <div className='sideMenu'>
            <h1>Eventos Unal</h1>
            <h3>Eventos por categoría</h3>
            <ul>
                <li onClick={() => updateCategory("Académico")}>
                    <input 
                        type="checkbox" 
                        checked={selectedCategories.includes("Académico")} 
                        readOnly
                    />
                    Académico
                </li>
                <li onClick={() => updateCategory("Cultura")}>
                    <input 
                        type="checkbox" 
                        checked={selectedCategories.includes("Cultura")} 
                        readOnly
                    />
                    Cultura
                </li>
                <li onClick={() => updateCategory("Deporte")}>
                    <input 
                        type="checkbox" 
                        checked={selectedCategories.includes("Deporte")} 
                        readOnly
                    />
                    Deportivo
                </li>
                <li onClick={() => updateCategory("Salud")}>
                    <input 
                        type="checkbox" 
                        checked={selectedCategories.includes("Salud")} 
                        readOnly
                    />
                    Salud
                </li>
                <li onClick={() => updateCategory("Bienestar")}>
                    <input 
                        type="checkbox" 
                        checked={selectedCategories.includes("Bienestar")} 
                        readOnly
                    />
                    Bienestar
                </li>
            </ul>
        </div>
    );
}

export default SideMenu;
