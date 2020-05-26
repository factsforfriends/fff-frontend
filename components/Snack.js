import Link from "next/link";

import Indicators, {Fresh, Trending} from "./Indicators"

import {URLtoDomain} from './functions';
import {splitAndReassemble} from './functions';

const Snack = ({ snack, fullWidth = false }) => {
    // Map snack to data model
    const { Category, Snack, URL, Tags, Medium, Location, Headline, ID } = snack;

    // Shorten URL to domain
    const domain = URLtoDomain(URL);

    // Create a string from category names, separated by bullet
    const Categories = splitAndReassemble(Category, " ", " \u2022 ")

    //Todo: Logic to decide on a indicator
    const Indicator = null;

    // Todo: Handle full-width view mode

    return(
      <div className={"flex-shrink bg-white p-6 my-1 mx-1 rounded text-sm border-2 border-gray-700 break-words " + (fullWidth ? 'max-w-2xl' : 'max-w-xs')}>
        <div className="flex flex-wrap justify-between items-center text-xs">
          <div className="uppercase tracking-wide text-gray-800">
            { Categories }
          </div>
        </div>
        <h4 className="font-semibold text-lg mb-2 mt-1 text-left tracking-wide">{ Headline }</h4>
        { Snack }
        <div className="mt-2 mb-2 items-baseline">
          {Tags.split(" ").map((tag, i_) => (
            <span key={i_} className="inline-block mr-1 bg-gray-200 text-gray-800 px-2 rounded-lg text-xs capitalize tracking-wide">{tag}</span>
          ))}
        </div>
        <hr className="border-0 bg-gray-200 text-gray-500 h-px" />
        <div className="flex mt-2 justify-between text-xs items-start">
          <div>
            <Link href={URL}>
              <a className="flex items-center italic">
                <svg className="h-4 w-4 mr-1 fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M7.859 14.691l-.81.805a1.814 1.814 0 01-2.545 0 1.762 1.762 0 010-2.504l2.98-2.955c.617-.613 1.779-1.515 2.626-.675a.992.992 0 101.397-1.407c-1.438-1.428-3.566-1.164-5.419.675l-2.98 2.956A3.719 3.719 0 002 14.244a3.72 3.72 0 001.108 2.658c.736.73 1.702 1.096 2.669 1.096s1.934-.365 2.669-1.096l.811-.805a.988.988 0 00.005-1.4.995.995 0 00-1.403-.006zm9.032-11.484c-1.547-1.534-3.709-1.617-5.139-.197l-1.009 1.002a.99.99 0 101.396 1.406l1.01-1.001c.74-.736 1.711-.431 2.346.197.336.335.522.779.522 1.252s-.186.917-.522 1.251l-3.18 3.154c-1.454 1.441-2.136.766-2.427.477a.99.99 0 10-1.396 1.406c.668.662 1.43.99 2.228.99.977 0 2.01-.492 2.993-1.467l3.18-3.153A3.732 3.732 0 0018 5.866a3.726 3.726 0 00-1.109-2.659z"/>
                </svg>
                { domain }
              </a>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/snack/[id]" as={`/snack/${ID}`}>
              <a>
                <button className={"bg-blue-300 hover:bg-blue-400 py-2 px-3 rounded-l inline-flex items-center " + (fullWidth ? 'hidden': '')}>
                  <svg className="h-4 w-4 mr-1 fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10.001 7.8a2.2 2.2 0 100 4.402A2.2 2.2 0 0010 7.8zm-7 0a2.2 2.2 0 100 4.402A2.2 2.2 0 003 7.8zm14 0a2.2 2.2 0 100 4.402A2.2 2.2 0 0017 7.8z"/>
                  </svg>
                </button>
              </a>
            </Link>
            <button className={"bg-green-300 hover:bg-green-400 py-2 px-3 inline-flex items-center " + (fullWidth ? 'rounded' : 'rounded-r')}>
              <svg className="h-4 w-4 mr-1 fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M15 13.442c-.633 0-1.204.246-1.637.642l-5.938-3.463c.046-.188.075-.384.075-.584s-.029-.395-.075-.583L13.3 6.025A2.48 2.48 0 0015 6.7c1.379 0 2.5-1.121 2.5-2.5S16.379 1.7 15 1.7s-2.5 1.121-2.5 2.5c0 .2.029.396.075.583L6.7 8.212A2.485 2.485 0 005 7.537c-1.379 0-2.5 1.121-2.5 2.5s1.121 2.5 2.5 2.5a2.48 2.48 0 001.7-.675l5.938 3.463a2.339 2.339 0 00-.067.546A2.428 2.428 0 1015 13.442z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
}

export default Snack;