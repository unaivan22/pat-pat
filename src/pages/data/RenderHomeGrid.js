import React, { Component } from 'react'
import data from './data.json'

class RenderHomeGrid extends Component {
	render() {
		return (
            <div className='grid lg:grid-cols-5 xl:grid-cols-5 gap-12'>
                {
					data.PetList.map((petsListed, i) => {
						return (
                            <div class="max-w-sm overflow-hidden">
                                <img class="w-full aspect-square rounded-full object-cover" src={petsListed.img} alt={petsListed.name} />
                                <h3 class="font-bold text-lg mb-2 col-span-1 text-center py-2">{petsListed.name}</h3>
                            </div>
						);
					})
				}
            </div>
        );
    }
} 

export default RenderHomeGrid;