'use client'
import { CategoryProps } from '@/type';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import Image from 'next/image';
import Link from 'next/link';

import { FaChevronDown } from 'react-icons/fa'
import useUserStore from '@/lib/counterStore'

export default function SelectCategory() {
    const { categories,setUID } = useUserStore();
    return (
        <div className='xl:hidden'>
            <Menu>
                <MenuButton className="inline-flex items-center gap-2 rounded-md border border-gray-400 hover:border-white py-1.5 px-3 font-semibold text-gray-300 hover:text-whiteText">
                    Select Category <FaChevronDown className="text-base mt-1" />
                </MenuButton>
                <Transition
                    enter="transition ease-out dutration-75"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <MenuItems
                        anchor="bottom start"
                        className="w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-gray-300 [--anchor-gap:var(--spacing-1)] focus:outline-none hover:text-white z-50"
                    >
                        {categories.map((item: CategoryProps) => (
                            <MenuItem key={item?._id}>
                                <Link
                                    href={`/${decodeURIComponent(item.name)}`}
                                    onClick={() => setUID(`${item._id}`)}
                                    className="flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-white/20 tracking-wide"
                                >
                                    <Image
                                        width={30}
                                        height={30}
                                        src={item?.image}
                                        alt="categoryImage"
                                        className="w-6 h-6 rounded-md"
                                    />
                                    {item?.name}
                                </Link>
                            </MenuItem>
                        ))}
                    </MenuItems>
                </Transition>
            </Menu>
        </div>
    )
}
