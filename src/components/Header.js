import React from 'react';
import HeroSection from './HeroSection';
import classNames from 'classnames';
import logo from '../assets/images/techblend.png';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const menu = [
  {
    name: 'About',
    href: '/',
    id: 'about',
  },

  {
    name: 'Our Team',
    href: '#team',
    id: 'ourteam',
  },
  {
    name: 'Our Product',
    href: '#product',
    id: 'product',
  },
  {
    name: 'Contact Us',
    href: '#contact',
    id: 'contact',
  },
];

export default function Header({ setOpen, headerOpen }) {
  return (
    <div className=" header-image  small_shadow text-white bg-opacity-20 rounded-lg">
      <div className="bg-black rounded-lg ">
        <header className="container mx-auto px-6 ">
          <div
            className={`mx-4 py-5 sm:py-5 md:py-10  sm:mx-4 md:mx-4 lg:mx-6 2xl:mx-0 ${
              headerOpen && 'h-screen overflow-hidden'
            }`}
          >
            <Disclosure as="nav" className="">
              {({ open, close }) => {
                setOpen(open);
                return (
                  <>
                    <div className="flex justify-between">
                      <div
                        className={`flex animate__animated animate__lightSpeedInLeft  animate__delay-1s ${
                          open ? 'hidden' : 'block'
                        }`}
                      >
                        <div className="flex lg:flex-1">
                          <Link to="/" className="-m-1.5 p-1.5">
                            <div className="flex gap-[10px] items-center">
                              <div className="p-2 rounded-full">
                                <img className="h-12 w-auto" src={logo} alt="TechBlend" />
                              </div>
                              {/* <div className="font-JotiOne text-2xl">TechBlend</div> */}
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="flex items-center animate__animated animate__bounceInDown animate__delay-1s text-base tracking-wide">
                        <div className="hidden md:ml-6 md:flex md:items-center">
                          <div className="hidden md:-my-px md:ml-6 md:flex md:space-x-14 font-JotiOne text-lg font-bold">
                            {menu.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className={({ isActive }) =>
                                  classNames(
                                    isActive
                                      ? 'border-aquamarine'
                                      : 'hover:border-aquamarine border-transparent',
                                    '   capitalize leading-5 tracking-[0.016em] text-nobel cursor-pointer'
                                  )
                                }
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="md:hidden items-center">
                        <div className="-mr-2 flex items-center md:hidden">
                          <Disclosure.Button className=" inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-0 focus:ring-indigo-500 focus:ring-offset-0">
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                              <XMarkIcon
                                className="block h-6 w-6 focus:ring-offset-0"
                                aria-hidden="true"
                              />
                            ) : (
                              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            )}
                          </Disclosure.Button>
                        </div>
                      </div>
                    </div>

                    <Disclosure.Panel className="bg-header-mobile animate__animated animate__slideInDown animate__faster absolute left-0 right-0 top-16 flex h-screen flex-col justify-evenly lg:hidden">
                      <div className="absolute -top-[44px] left-4">
                        <div className="flex lg:flex-1">
                          <Link to="/" className="-m-1.5 p-1.5">
                            <div className="flex gap-[10px] items-center">
                              <div className="bg-white p-2 rounded-full">
                                <img className="h-8 w-auto" src={logo} alt="Fine" />
                              </div>
                              <div className="font-JotiOne text-3xl text-white ">TechBlend</div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="grid gap-5 font-Caveat space-y-1 pt-2 pb-3 text-2xl font-JotiOne font-medium text-center animate__animated animate__bounceInDown animate__delay-1s">
                        {menu.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={() => close()}
                            className={({ isActive }) =>
                              classNames(
                                isActive
                                  ? ''
                                  : 'hover:bg-aquamarine-400 border-transparent text-nobel hover:border-gray-300 hover:text-gray-800',
                                'block py-2 pl-3 pr-4 '
                              )
                            }
                          >
                            {' '}
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
                );
              }}
            </Disclosure>
          </div>
        </header>
        {!headerOpen && <HeroSection />}
      </div>
    </div>
  );
}
