import React from "react";
import './startmusic.css'
const StartMusic = () => {
    return (
        <div className='start-music-body'>
            <header className='start-music-header'>Add  your songs here ...</header>
            <form className='start-music-add-form'>
                <div className='form-control'>
                    <span className='start-music-add'>
                        <input type='text' placeholder=' Past link here' className='start-music-pastlink'/>

                        <button className='btn-tbn-block-cloud'> 
                         </button>

                        <button className='btn-tbn-block-add'> ADD </button>
                    </span>
                    
                </div>
                <div className='form-control'>
                    <span className='start-music-remove'>
                    <button className='btn-tbn-block-music'>  </button>
                    <input type='text' placeholder=
                    'Song Title - Fetched from link 04:00' className='start-music-songtitle' />

                    <button className='btn-tbn-block-pouse'> 
                     </button>

                    <button className='btn-tbn-block-remove'> REMOVE </button>
                   
                    </span>
                </div>

                <input type='submit' value='START GAME' className='btn-tbn-block' />
        </form>
        </div>
    )
}

export default StartMusic
