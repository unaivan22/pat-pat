import React from 'react'
import HeadDetail from './HeadDetail'
import PhotosThumb from './PhotosThumb'
import DescDetail from './DescDetail'
import Header from '../utils/Header'

export default function RenderDetail() {
  return (
    <div className='grid gap-6 w-full md:grid-cols-1'>
        
        <Header />
         
         <div className='container mx-auto mt-12'>
            <HeadDetail />
            <div className='divide-y-3'></div>
            <PhotosThumb />
            <DescDetail />
         </div>
    </div>
  )
}
