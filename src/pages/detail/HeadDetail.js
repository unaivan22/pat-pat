import React from 'react'

export default function HeadDetail() {
  return (
    <div className='grid gap-6 w-full md:grid-cols-3 flex items-center'>
        <img className='w-full aspect-square rounded-full object-cover' src='https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' />
        <div className='px-12 py-12 col-span-2'>
            <h1 className='text-8xl leading-none'>Timy Neal</h1>
            <h2 className='mt-4 text-xl font-bold text-zinc-700'>Male, 2 yo</h2>
            <h4 className='text-sm font-light text-gray-500'>2 kilometers distance from you</h4>
        </div>
        {/* <div class="max-w-sm rounded overflow-hidden shadow">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Call Owner</div>
                <p class="text-gray-700 text-base">
                +6289513627458
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
            </div>
        </div> */}
    </div>
  )
}
