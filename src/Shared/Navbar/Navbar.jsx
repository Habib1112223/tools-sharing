import { Fragment, useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react';
import { AuthContext } from '../../Providers/AuthProvider';
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()

    const classNames = (...classes) => {
        return classes.filter(Boolean).join(' ')
    }

    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate('/login', { replace: true })
                setLoginPopupOpen(true);
            })
            .catch(error => console.error(error))
    }

    return (
        <header className='bg-[#192675] py-5 shadow-blue-900' data-aos="fade-down" >
            <nav className='lg:w-10/12 px-4 mx-auto flex justify-between items-center text-white uppercase'>
                {/* Desktop */}
                <div className='hidden lg:block w-3/12'>
                    <h2 className='lg:text-3xl'>
                        <Link className='flex items-center gap-1' to={'/'}><img className='w-14 ' src="https://i.ibb.co/M1sjqZr/tools.jpg" alt="" /> TOOLS SHARING</Link>
                    </h2>
                </div>

                {/* Mobile */}
                <Menu as="div" className="ml-4 block lg:hidden">
                    <div>
                        <Menu.Button className="font-semibold hover:text-red-500 transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>

                        </Menu.Button>
                    </div>
                    <Menu.Items className="absolute left-0 mt-2 w-full origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-30">
                        <div className="py-1 text-black">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        to="/"
                                        className={`block px-4 py-2 text-sm font-semibold ${active ? 'bg-gray-100 text-red-500' : ''
                                            } hover:bg-gray-100 hover:text-red-500 transition-colors duration-200`}
                                    >
                                        Home
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        to="/services"
                                        className={`block px-4 py-2 text-sm font-semibold ${active ? 'bg-gray-100 text-red-500' : ''
                                            } hover:bg-gray-100 hover:text-red-500 transition-colors duration-200`}
                                    >
                                        Services
                                    </Link>
                                )}
                            </Menu.Item>
                            {
                                user?.uid &&
                                <Menu as="li" className="relative list-none">
                                    <span>
                                        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                                            Dashboard
                                            <ChevronDownIcon
                                                className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                                                aria-hidden="true"
                                            />
                                        </Menu.Button>
                                    </span>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-30 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="/account"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Account
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        onClick={handleSignOut}
                                                    >
                                                        Sign out
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            }
                        </div>
                    </Menu.Items>
                </Menu>

                {/* Desktop */}
                <div className='lg:flex justify-center hidden w-8/12 '>
                    <ul className='flex gap-4 items-center'>
                        <li >
                            <Link className='font-normal hover:text-red-500 transition-colors duration-200' to="/">Home</Link>
                        </li>
                        <li >
                            <Link className='font-normal hover:text-red-500 transition-colors duration-200' to="/services">Services</Link>
                        </li>
                        {
                            user?.uid && <>
                                <li><Link
                                    to="/manageService"
                                    className="hover:text-red-500"
                                >Manage Service</Link></li>

                            </>}
                        {
                            user?.uid &&
                            <Menu as="li" className="relative">
                                <span>
                                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                                        DASHBOARD
                                        <ChevronDownIcon
                                            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </span>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-30 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/my-services"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    My-services
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/add-services"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Add-services
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/my-schedules"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    My-schedules
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>


                        }
                    </ul>
                </div>

                {/* Mobile */}
                <div className='lg:hidden block'>
                    <h2 className='lg:text-4xl '><Link to={'/'}>TOOLS SHARING</Link></h2>
                </div>


                {/* Mobile and Desktop */}
                <div className='w-2/12 flex justify-end'>
                    {
                        user == user?.uid ? <>
                            <div className='flex gap-4'>
                                <Link to='/login'>Login</Link>
                            </div>
                        </> :
                            <>
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <h3 className="mx-2">{user?.displayName}</h3>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src={user?.photoURL}
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-30 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        onClick={handleSignOut}
                                                    >
                                                        Log Out
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </>
                    }
                </div >
            </nav >
        </header >
    )
}

export default Header;