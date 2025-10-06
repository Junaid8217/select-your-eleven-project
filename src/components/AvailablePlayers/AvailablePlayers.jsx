import React, { use } from 'react';

import userImg from '../../assets/Group.png'
import flagImg from '../../assets/report1.png'

const AvailablePlayers = ({ playerPromise }) => {

    const playerData = use(playerPromise)
    console.log(playerData)
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 '>

            {
                playerData.map(player => <div className="card bg-base-100 shadow-sm p-4">
                <figure>
                    <img
                        src={player.player_image}
                        alt="Image unavailable" />
                </figure>
                <div className="mt-4 ">
                    <div className='flex'>
                        <img src={userImg} alt="" />
                    <h2 className="card-title ml-2">{player.player_name}</h2>
                    </div>
                    <div className='flex justify-between mt-4 border-b-1 pb-2 border-gray-400'>
                        <div className='flex gap-2 items-center'>
                            <img className='w-[20px] h-[20px] ' src={flagImg} alt="" />
                            <span>{player.player_country}</span>
                        </div>
                        <button className='btn'>All Rounder</button>
                    </div>

                    <div className='flex justify-between font-bold mt-4'>
                        <span>Ratting</span>
                        <span>{player.rating}</span>
                    </div>
                    <div className='flex justify-between '>
                        <span className='font-bold'>{player.batting_style}</span>
                        <span>{player.bowling_style}</span>
                    </div>


                    <div className="card-actions  mt-3 justify-between items-center">
                        <p>Price: <span>{player.price}</span></p>
                        <button className="btn ">Choose Player</button>
                    </div>
                </div>
            </div>)
            }

            

        </div>
    );
};

export default AvailablePlayers;