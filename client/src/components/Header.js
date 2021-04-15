import { WindmillContext } from '@windmill/react-ui'
import React, { useContext } from 'react'
import { SidebarContext } from '../context/SidebarContext'
import { MenuIcon, MoonIcon, SunIcon, GithubIcon } from '../icons'

function Header() {
    const { mode, toggleMode } = useContext(WindmillContext)
    const { toggleSidebar } = useContext(SidebarContext)
    return (
        <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
            <div className="container flex items-center justify-end h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
                <button
                    className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
                    onClick={toggleSidebar}
                    aria-label="Menu"
                >
                    <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </button>
                <ul className="flex items-center flex-shrink-0 space-x-6 content-end">
                    {/* <!-- Theme toggler --> */}
                    <li className="flex">
                    <a href="https://github.com/t6tg/numerical">
                            <GithubIcon
                                className="w-5 h-5 mr-3"
                                aria-hidden="true"
                            />
                        </a>
                        <button
                            className="rounded-md focus:outline-none focus:shadow-outline-purple"
                            onClick={toggleMode}
                            aria-label="Toggle color mode"
                        >
                            {mode === 'dark' ? (
                                <SunIcon
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                />
                            ) : (
                                <MoonIcon
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                />
                            )}
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
