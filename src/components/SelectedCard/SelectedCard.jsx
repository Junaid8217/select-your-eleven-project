import React from 'react';
import dltImg from '../../assets/Vector.png'

const SelectedCard = ({player, removePlayer}) => {
    
    const handleRemove = () =>{
        removePlayer(player)
    }  
    return (
         <div className='mt-3 border-2 border-gray-200 flex justify-between items-center rounded-xl p-3'>
                <div className='flex items-center '>
                    <img className='h-[50px] w-[50px] rounded-xl' src={player.player_image} alt="" />
                    <div className='ml-2'>
                        <h1>{player.player_name}</h1>
                        <p className='text-xs'>{player.playing_role}</p>
                    </div>
                </div>
                <div onClick={handleRemove}>
                    <img src={dltImg} alt="" />
                </div>
            </div>
    );
};

export default SelectedCard;