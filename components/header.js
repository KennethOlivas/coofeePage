
/* import menu heroicons*/

import {MenuIcon} from "@heroicons/react/outline"

export default function Header() {

    return (
        <header className="fixed w-full flex justify-between items-center px-4 md:px-12 h-20">
            <a href="#">
                <img src="logo.png" alt="logo" className="h-10"/>
            </a>
            
            <nav className="mr-0 md:mr-20">
                <button>
                    <MenuIcon className="h-8 w-6 md:hidden"/>
                </button>
                <ul className="fixed left-0 right-0 min-h-screen space-y-4 p-4  text-xl
                    transform translate-x-full md:relative md:flex md:min-h-0 md:space-y-0 md:space-x-6 md:p-0 md:translate-x-0 md:bg-none">
                    <li>
                        <a href="#" className="text-stone-200 border-b-4 border-t-4 border-transparent hover:border-brown-sugar hover:text-eggplant transition-all duration-150">Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-stone-200 border-b-4 border-t-4 border-transparent hover:border-brown-sugar hover:text-eggplant transition-all duration-150">Products</a>
                    </li>
                    <li>
                        <a href="#" className="text-stone-200 border-b-4 border-t-4 border-transparent hover:border-brown-sugar hover:text-eggplant transition-all duration-150">Feactuares</a>
                    </li>
                    <li>
                        <a href="#" className="text-stone-200 border-b-4 border-t-4 border-transparent hover:border-brown-sugar hover:text-eggplant transition-all duration-150">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>

    )
}