import React, { useState } from 'react';
import userImg from '../../assets/Group.png'
import flagImg from '../../assets/report1.png'
import { toast } from 'react-toastify';



const PlayerCard = ({ player, setAvailableBalance, availableBalance, purchasedPlayers, setPurchasedPlayers }) => {
    const [isSelected, setIsSelected] = useState(false)

    const handleSelected = (playerData) => {
        if (availableBalance < player.price) {
            toast("Not enough money")
            return;
        }
        if(purchasedPlayers.length === 6){
            toast("6 Players all ready selected")
        }
        setIsSelected(true)
        setAvailableBalance(availableBalance - player.price)
        setPurchasedPlayers([...purchasedPlayers, playerData])
    }
    return (
        <div className="card bg-base-100 shadow-sm p-4">
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
                    <button disabled={isSelected} onClick={() => handleSelected(player)
                    } className="btn ">{isSelected === true ? "Selected" : "Choose Player"}</button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;