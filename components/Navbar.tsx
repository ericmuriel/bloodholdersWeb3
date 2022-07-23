import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'GIFT', href: '/giftPage', current: false },
  { name: 'WHITEPAPER (EN)', href: 'https://blood-holders.gitbook.io/whitepaper-english/', current: false },
  { name: 'WHITEPAPER (ES)', href: 'https://blood-holders.gitbook.io/whitepaper-blood-holders/', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Navbar = () => {
  return (
    <Disclosure as='nav' className='bg-gray-800'  style={{ height: "16vh" }}>
      {({ open }) => (
        <>
          <div className='max-w-full px-2 mx-auto lg:mr-44 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 right-0 flex items-center lg:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-blood hover:text-blood hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block w-6 h-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block w-6 h-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>

              <div className='flex items-stretch justify-end flex-1'>
                <div className='hidden lg:block lg:ml-6'>
                  <div className='flex space-lg-48'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white hover:bg-hover'
                            : 'text-red hover:text-white',
                          'bg-cover flex justify-center items-center w-48 before:text-4xl  h-48 text-center mt-32 rounded-md text-2xl hover:text-4xl hover:bg-hover  font-normal font-junkdog text-blood',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className='lg:hidden'>
            <div className='absolute z-50 w-full px-2 pt-2 pb-3 space-y-1 text-center'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-red hover:text-white',
                    'block font-normal font-junkdog text-blood text-2xl hover:text-4xl h-12 hover:bg-hamburguer bg-contain',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
