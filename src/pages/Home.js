import React from 'react'
import {Link} from 'react-router-dom'
// import RenderHomeMasonry from './data/RenderHomeGrid'
import RenderHomeGrid from './data/RenderHomeGrid'


import Header from './utils/Header'
import Footer from './utils/Footer'

export default function Home() {
  return (
    <div>
        <Header />

        <ul class="grid gap-6 w-full md:grid-cols-2">
            <li>
                <input type="radio" id="type-cats" name="cat" value="type-cats" class="hidden peer" required="" />
                <label for="type-cats" class="inline-flex justify-between items-center p-5 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
                    <div class="block margin-auto text-center">
                        <svg class="w-full h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M41 43.7v-2.1c1.2-.5 2.1-1.3 2.7-2.5l1.2-2.5c.8-1.6.7-3.5-.2-5.1-1-1.6-2.6-2.5-4.5-2.5h-2.5c-1.8 0-3.5.9-4.5 2.5s-1.1 3.5-.2 5.1l1.2 2.5c.6 1.2 1.5 2 2.7 2.5v2.1c0 1.1.9 2 2 2s2.1-.9 2.1-2zm-3.1-6.5-1.2-2.5c-.3-.6 0-1 .1-1.2s.4-.6 1.1-.6h2.5c.6 0 1 .4 1.1.6s.3.7.1 1.2l-1.2 2.5c-.3.6-.9.7-1.1.7s-1.1 0-1.4-.7z"/><circle cx="49" cy="26.7" r="2"/><circle cx="29" cy="26.7" r="2"/><path d="M93 44.7c-7.7 0-14 6.3-14 14v4c0 10.3-7.9 18.9-18 19.9V67.7c0-6.3-2.7-11.9-6.9-16 2.5-1.5 4.8-3.3 6.6-5.4l9.7 3.2c.2.1.4.1.6.1.8 0 1.6-.5 1.9-1.4.3-1.1-.2-2.2-1.3-2.5l-8.5-2.8c1.6-2.6 2.5-5.6 2.8-8.7l5.3-.6c1.1-.1 1.9-1.1 1.8-2.2-.1-1.1-1.1-1.9-2.2-1.8l-4.8.6V11.3C66 9.1 64.8 7 62.8 6s-4.4-.9-6.2.4l-7.2 5c-3.3-1.2-6.8-1.8-10.4-1.8s-7.1.6-10.4 1.8l-7.2-5C19.6 5.1 17.2 5 15.2 6S12 9.1 12 11.3v18.9l-4.8-.5c-1.1-.1-2.1.7-2.2 1.8-.1 1.1.7 2.1 1.8 2.2l5.3.6c.2 3.1 1.2 6 2.8 8.7l-8.5 2.8c-1 .4-1.6 1.5-1.3 2.5.3.8 1.1 1.4 1.9 1.4.2 0 .4 0 .6-.1l9.7-3.2c1.8 2.1 4 3.9 6.6 5.4-4.2 4-6.9 9.7-6.9 16v21c0 3.3 2.7 6 6 6h32c3.3 0 6-2.7 6-6v-2.1c12.3-1 22-11.3 22-23.9v-4c0-5.5 4.5-10 10-10 1.1 0 2-.9 2-2 0-1.2-.9-2.1-2-2.1zm-34.2-35c.6-.4 1.4-.5 2.1-.1.7.4 1.1 1 1.1 1.8v9.3c-2.1-2.9-4.9-5.4-8.3-7.3l5.1-3.7zM16 11.3c0-.8.4-1.4 1.1-1.8.7-.3 1.4-.3 2.1.1l5.2 3.6c-3.4 1.9-6.3 4.4-8.3 7.3v-9.2zm5.5 33.6 4.2-1.4c1-.3 1.6-1.5 1.3-2.5-.4-1-1.5-1.6-2.5-1.3l-5.6 1.9a16.1 16.1 0 0 1-2.6-7l8.7 1h.2c1 0 1.9-.8 2-1.8.1-1.1-.7-2.1-1.8-2.2l-9.1-1c.7-6.4 5.6-12.2 12.7-15.1 3.1-1.2 6.5-1.9 10-1.9s6.8.6 10 1.9c7.2 2.9 12.1 8.7 12.9 15.1l-9.1 1c-1.1.1-1.9 1.1-1.8 2.2.1 1 1 1.8 2 1.8h.2l8.7-1c-.3 2.5-1.2 4.8-2.6 7l-5.6-1.9c-1-.3-2.2.2-2.5 1.3-.3 1 .2 2.2 1.3 2.5l4.2 1.4C52.3 49.1 46 51.7 39 51.7s-13.3-2.6-17.5-6.8zM57 88.7c0 1.1-.9 2-2 2h-4v-14c0-1.1-.9-2-2-2s-2 .9-2 2v14h-6v-18c0-1.1-.9-2-2-2s-2 .9-2 2v18h-6v-14c0-1.1-.9-2-2-2s-2 .9-2 2v14h-4c-1.1 0-2-.9-2-2v-21c0-5.7 2.7-10.8 6.8-14.1 3.4 1.3 7.2 2.1 11.2 2.1s7.8-.8 11.2-2.1C54.3 56.9 57 62 57 67.7v21z"/></svg>
                        {/* <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                        <div class="w-full text-lg font-semibold">Cat</div>
                    </div>
                </label>
            </li>
            <li>
                <input type="radio" id="type-dogs" name="dog" value="type-dogs" class="hidden peer" required="" />
                <label for="type-dogs" class="inline-flex justify-between items-center p-5 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
                    <div class="block margin-auto text-center">
                        <svg class="w-full h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M41 43.7v-2.1c1.2-.5 2.1-1.3 2.7-2.5l1.2-2.5c.8-1.6.7-3.5-.2-5.1-1-1.6-2.6-2.5-4.5-2.5h-2.5c-1.8 0-3.5.9-4.5 2.5s-1.1 3.5-.2 5.1l1.2 2.5c.6 1.2 1.5 2 2.7 2.5v2.1c0 1.1.9 2 2 2s2.1-.9 2.1-2zm-3.1-6.5-1.2-2.5c-.3-.6 0-1 .1-1.2s.4-.6 1.1-.6h2.5c.6 0 1 .4 1.1.6s.3.7.1 1.2l-1.2 2.5c-.3.6-.9.7-1.1.7s-1.1 0-1.4-.7z"/><circle cx="49" cy="26.7" r="2"/><circle cx="29" cy="26.7" r="2"/><path d="M93 44.7c-7.7 0-14 6.3-14 14v4c0 10.3-7.9 18.9-18 19.9V67.7c0-6.3-2.7-11.9-6.9-16 2.5-1.5 4.8-3.3 6.6-5.4l9.7 3.2c.2.1.4.1.6.1.8 0 1.6-.5 1.9-1.4.3-1.1-.2-2.2-1.3-2.5l-8.5-2.8c1.6-2.6 2.5-5.6 2.8-8.7l5.3-.6c1.1-.1 1.9-1.1 1.8-2.2-.1-1.1-1.1-1.9-2.2-1.8l-4.8.6V11.3C66 9.1 64.8 7 62.8 6s-4.4-.9-6.2.4l-7.2 5c-3.3-1.2-6.8-1.8-10.4-1.8s-7.1.6-10.4 1.8l-7.2-5C19.6 5.1 17.2 5 15.2 6S12 9.1 12 11.3v18.9l-4.8-.5c-1.1-.1-2.1.7-2.2 1.8-.1 1.1.7 2.1 1.8 2.2l5.3.6c.2 3.1 1.2 6 2.8 8.7l-8.5 2.8c-1 .4-1.6 1.5-1.3 2.5.3.8 1.1 1.4 1.9 1.4.2 0 .4 0 .6-.1l9.7-3.2c1.8 2.1 4 3.9 6.6 5.4-4.2 4-6.9 9.7-6.9 16v21c0 3.3 2.7 6 6 6h32c3.3 0 6-2.7 6-6v-2.1c12.3-1 22-11.3 22-23.9v-4c0-5.5 4.5-10 10-10 1.1 0 2-.9 2-2 0-1.2-.9-2.1-2-2.1zm-34.2-35c.6-.4 1.4-.5 2.1-.1.7.4 1.1 1 1.1 1.8v9.3c-2.1-2.9-4.9-5.4-8.3-7.3l5.1-3.7zM16 11.3c0-.8.4-1.4 1.1-1.8.7-.3 1.4-.3 2.1.1l5.2 3.6c-3.4 1.9-6.3 4.4-8.3 7.3v-9.2zm5.5 33.6 4.2-1.4c1-.3 1.6-1.5 1.3-2.5-.4-1-1.5-1.6-2.5-1.3l-5.6 1.9a16.1 16.1 0 0 1-2.6-7l8.7 1h.2c1 0 1.9-.8 2-1.8.1-1.1-.7-2.1-1.8-2.2l-9.1-1c.7-6.4 5.6-12.2 12.7-15.1 3.1-1.2 6.5-1.9 10-1.9s6.8.6 10 1.9c7.2 2.9 12.1 8.7 12.9 15.1l-9.1 1c-1.1.1-1.9 1.1-1.8 2.2.1 1 1 1.8 2 1.8h.2l8.7-1c-.3 2.5-1.2 4.8-2.6 7l-5.6-1.9c-1-.3-2.2.2-2.5 1.3-.3 1 .2 2.2 1.3 2.5l4.2 1.4C52.3 49.1 46 51.7 39 51.7s-13.3-2.6-17.5-6.8zM57 88.7c0 1.1-.9 2-2 2h-4v-14c0-1.1-.9-2-2-2s-2 .9-2 2v14h-6v-18c0-1.1-.9-2-2-2s-2 .9-2 2v18h-6v-14c0-1.1-.9-2-2-2s-2 .9-2 2v14h-4c-1.1 0-2-.9-2-2v-21c0-5.7 2.7-10.8 6.8-14.1 3.4 1.3 7.2 2.1 11.2 2.1s7.8-.8 11.2-2.1C54.3 56.9 57 62 57 67.7v21z"/></svg>
                        {/* <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                        <div class="w-full text-lg font-semibold">Cat</div>
                    </div>
                </label>
            </li>
            {/* <li>
                <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required="" />
                <label for="hosting-small" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                <svg aria-hidden="true" class="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <div class="block">
                        <div class="w-full text-lg font-semibold">0-50 MB</div>
                        <div class="w-full">Good for small websites</div>
                    </div>
                </label>
            </li> */}
            
            {/* <li>
                <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer" />
                <label for="hosting-big" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div class="block">
                        <div class="w-full text-lg font-semibold">500-1000 MB</div>
                        <div class="w-full">Good for large websites</div>
                    </div>
                    <svg class="ml-3 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M41 43.7v-2.1c1.2-.5 2.1-1.3 2.7-2.5l1.2-2.5c.8-1.6.7-3.5-.2-5.1-1-1.6-2.6-2.5-4.5-2.5h-2.5c-1.8 0-3.5.9-4.5 2.5s-1.1 3.5-.2 5.1l1.2 2.5c.6 1.2 1.5 2 2.7 2.5v2.1c0 1.1.9 2 2 2s2.1-.9 2.1-2zm-3.1-6.5-1.2-2.5c-.3-.6 0-1 .1-1.2s.4-.6 1.1-.6h2.5c.6 0 1 .4 1.1.6s.3.7.1 1.2l-1.2 2.5c-.3.6-.9.7-1.1.7s-1.1 0-1.4-.7z"/><circle cx="49" cy="26.7" r="2"/><circle cx="29" cy="26.7" r="2"/><path d="M93 44.7c-7.7 0-14 6.3-14 14v4c0 10.3-7.9 18.9-18 19.9V67.7c0-6.3-2.7-11.9-6.9-16 2.5-1.5 4.8-3.3 6.6-5.4l9.7 3.2c.2.1.4.1.6.1.8 0 1.6-.5 1.9-1.4.3-1.1-.2-2.2-1.3-2.5l-8.5-2.8c1.6-2.6 2.5-5.6 2.8-8.7l5.3-.6c1.1-.1 1.9-1.1 1.8-2.2-.1-1.1-1.1-1.9-2.2-1.8l-4.8.6V11.3C66 9.1 64.8 7 62.8 6s-4.4-.9-6.2.4l-7.2 5c-3.3-1.2-6.8-1.8-10.4-1.8s-7.1.6-10.4 1.8l-7.2-5C19.6 5.1 17.2 5 15.2 6S12 9.1 12 11.3v18.9l-4.8-.5c-1.1-.1-2.1.7-2.2 1.8-.1 1.1.7 2.1 1.8 2.2l5.3.6c.2 3.1 1.2 6 2.8 8.7l-8.5 2.8c-1 .4-1.6 1.5-1.3 2.5.3.8 1.1 1.4 1.9 1.4.2 0 .4 0 .6-.1l9.7-3.2c1.8 2.1 4 3.9 6.6 5.4-4.2 4-6.9 9.7-6.9 16v21c0 3.3 2.7 6 6 6h32c3.3 0 6-2.7 6-6v-2.1c12.3-1 22-11.3 22-23.9v-4c0-5.5 4.5-10 10-10 1.1 0 2-.9 2-2 0-1.2-.9-2.1-2-2.1zm-34.2-35c.6-.4 1.4-.5 2.1-.1.7.4 1.1 1 1.1 1.8v9.3c-2.1-2.9-4.9-5.4-8.3-7.3l5.1-3.7zM16 11.3c0-.8.4-1.4 1.1-1.8.7-.3 1.4-.3 2.1.1l5.2 3.6c-3.4 1.9-6.3 4.4-8.3 7.3v-9.2zm5.5 33.6 4.2-1.4c1-.3 1.6-1.5 1.3-2.5-.4-1-1.5-1.6-2.5-1.3l-5.6 1.9a16.1 16.1 0 0 1-2.6-7l8.7 1h.2c1 0 1.9-.8 2-1.8.1-1.1-.7-2.1-1.8-2.2l-9.1-1c.7-6.4 5.6-12.2 12.7-15.1 3.1-1.2 6.5-1.9 10-1.9s6.8.6 10 1.9c7.2 2.9 12.1 8.7 12.9 15.1l-9.1 1c-1.1.1-1.9 1.1-1.8 2.2.1 1 1 1.8 2 1.8h.2l8.7-1c-.3 2.5-1.2 4.8-2.6 7l-5.6-1.9c-1-.3-2.2.2-2.5 1.3-.3 1 .2 2.2 1.3 2.5l4.2 1.4C52.3 49.1 46 51.7 39 51.7s-13.3-2.6-17.5-6.8zM57 88.7c0 1.1-.9 2-2 2h-4v-14c0-1.1-.9-2-2-2s-2 .9-2 2v14h-6v-18c0-1.1-.9-2-2-2s-2 .9-2 2v18h-6v-14c0-1.1-.9-2-2-2s-2 .9-2 2v14h-4c-1.1 0-2-.9-2-2v-21c0-5.7 2.7-10.8 6.8-14.1 3.4 1.3 7.2 2.1 11.2 2.1s7.8-.8 11.2-2.1C54.3 56.9 57 62 57 67.7v21z"/></svg>
                </label>
            </li> */}
        </ul>

        {/* <div className='container mx-auto mt-12'>
            <RenderHomeMasonry />
        </div> */}

        <div className='container mx-auto mt-12'>
            <RenderHomeGrid />
        </div>

        <Footer />
    </div>
  )
}
