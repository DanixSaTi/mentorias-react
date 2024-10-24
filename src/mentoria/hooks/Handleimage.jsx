import React, { useState, useEffect } from 'react';
import './scss/HandleImage.scss';

//Porque no me deja poner la ruta de la imagen??
import RogerFeder from './img/rogerFeder.jpg';

const HandleImage = () => {

    //useState hooks to manage the state of the component
    const [showImage, setShowImage] = useState(true);
    const [showlikes, setShowlikes] = useState(0);
    

    //function to handle click in the image 
    const handleClick = () => {
        setShowImage(false); //if the image is clicked became visible
    }
        
    

    //function to count the number of likes to the image
    const handlebuttonlikes = () => {
        setShowlikes(likes => likes +1); //
    }

        useEffect(() => {
        console.log('Likes number');
    }, [showlikes]);

    return (
        <div className='all-container'> 
            {showImage ? ( //this is the condition 
                <div className='image-container'>
                    <img src={RogerFeder} onClick={handleClick} alt="image of Roger Feder" />
                </div>
            ) : (
                <div className='text-container'>
                    
                    <p>
                    Roger Federer is considered one of the greatest tennis players of all time. 
                    With an elegant playing style and impeccable technique, he has captivated fans worldwide. 
                    Throughout his career, he has won an impressive total of 20 Grand Slam titles.
                    </p>
                    <button onClick={handlebuttonlikes}>Like</button>
                    <p>You have liked this image {showlikes} times</p>
                    
                </div>
            )}
            
        </div>
    );



}

export default HandleImage;
