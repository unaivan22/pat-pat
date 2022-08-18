import React, { Component } from 'react'
import data from './data.json'
import {Link} from 'react-router-dom'

class RenderHomeMasonry extends Component {
	render() {
		return (
            <div className='lg:columns-4 xl:columns-4 space-y-4'>
                {
					data.PetList.map((petsListed, i) => {
						return (
                            <Link to={petsListed.link} class="max-w-sm rounded overflow-hidden border border-gray-200 rounded-xl">
                                <img class="w-full h-full" src={petsListed.img} alt="Sunset in the mountains" />
                                <div class="px-6 py-2 mt-2">
                                    <h3 class="font-bold text-lg mb-2 col-span-1">{petsListed.name}</h3>
                                </div>
                                <div class="px-6 mb-4">
                                    <div className='grid grid-cols-2 gap-2 '>
                                        <p className='text-sm'> <span className='inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full w-6 h-6 text-sm'>{petsListed.sex}</span> {petsListed.age} Yo</p>
                                        <h4 class="font-base text-sm mb-2 col-span-1 text-right">{petsListed.distance} kilometers</h4>
                                    </div>
                                </div>
                            </Link>
						);
					})
				}
            </div>
        );
    }
} 

export default RenderHomeMasonry;