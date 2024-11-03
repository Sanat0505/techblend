import React from 'react';
import logo from '../assets/images/techblend.png';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const menu = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Our Team', href: '#team', id: 'ourteam' },
  { name: 'Our Product', href: '#product', id: 'product' },
  { name: 'Contact Us', href: '#contact', id: 'contact' },
];

export default function Header() {
  return (
    <div className="header-image small_shadow font-semibold text-black bg-opacity-20 rounded-lg">
      <div className="bg-gray-200 rounded-lg">
        <header className="container mx-auto px-6">
          <Disclosure as="nav">
            {({ open }) => (
              <>
                <div className="flex justify-between items-center py-5">
                  {/* Logo */}
                  <a href="/  " className="flex items-center gap-2">
                    <img src={logo} alt="TechBlend" className="h-10 w-auto" />
                    <span className="font-bold text-xl">TechBlend</span>
                  </a>

                  {/* Desktop Menu */}
                  <div className="hidden md:flex items-center space-x-10 font-semibold text-lg">
                    {menu.map((item) => (
                      <a
                        key={item.id}
                        href={item.href}
                        className="text-nobel hover:text-blue-500 transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>

                  {/* Mobile Menu Button */}
                  <Disclosure.Button className="md:hidden p-2 rounded-md text-gray-600 hover:text-black">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                {/* Mobile Menu Panel */}
                <Disclosure.Panel className="md:hidden">
                  <div className="space-y-4 bg-gray-100 p-4">
                    {menu.map((item) => (
                      <a
                        key={item.id}
                        href={item.href}
                        className="block text-lg font-medium text-gray-700 hover:text-blue-500"
                        onClick={() => Disclosure.close()} // Close menu on click
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </header>
      </div>
    </div>
  );
}
