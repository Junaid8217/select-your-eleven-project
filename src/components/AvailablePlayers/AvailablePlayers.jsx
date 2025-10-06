import React, { use } from 'react';

import userImg from '../../assets/Group.png'
import flagImg from '../../assets/report1.png'

const AvailablePlayers = ({ playerPromise }) => {

    const playerData = use(playerPromise)
    console.log(playerData)
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className="card bg-base-100 w-96 shadow-sm p-4">
                <figure>
                    <img
                        src="https://i.ibb.co.com/JRDckGqv/1696748634550-Shakib-Al-Hasan.jpg"
                        alt="Shoes" />
                </figure>
                <div className="mt-4">
                    <div className='flex'>
                        <img src={userImg} alt="" />
                    <h2 className="card-title ml-2">Shakib All Hasan</h2>
                    </div>
                    <div className='flex justify-between mt-4 border-b-1 pb-2 border-gray-400'>
                        <div className='flex gap-2 items-center'>
                            <img className='w-[20px] h-[20px] ' src={flagImg} alt="" />
                            <span>India</span>
                        </div>
                        <button className='btn'>All Rounder</button>
                    </div>

                    <div className='flex justify-between font-bold mt-4'>
                        <span>Ratting</span>
                        <span>5</span>
                    </div>
                    <div className='flex justify-between '>
                        <span className='font-bold'>Left Hand Bat</span>
                        <span>Left Hand Bowl</span>
                    </div>


                    <div className="card-actions  mt-3 justify-between items-center">
                        <p>Price: $1500000</p>
                        <button className="btn ">Choose Player</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AvailablePlayers;