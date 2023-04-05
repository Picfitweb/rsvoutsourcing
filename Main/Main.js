import React from 'react'

// Styles
import './main.css';

// Assest
import wallpaper from '../../assets/wallpaper.jpeg';

const Main = () => {
    return (
        <div className='container'>
            <div className="title">
                <h2>Saludos, esto es una prueba de ciberataque.</h2>
                <h3>Debe de tener mucho cuidado</h3>
            </div>

            <div className="portada">
                <img src={wallpaper} alt="wallpaper" />
            </div>

            <div>
                
			</div>
        </div>
    )
}

export default Main