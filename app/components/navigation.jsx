'use client'
import React, {useState} from 'react';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {Dialog, DialogPanel} from "@headlessui/react";
import Link from "next/link";
import Image  from "next/image";

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Cocktails', href: '/cocktails' },
    { name: 'Events & Promotions', href: '/events-and-promotions' },
    { name: 'Contact', href: '/contact' },
]

export default function Navigation() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div>
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1 ">
                    <Link href="/" className="-m-1.5 p-1.5 flex lg:flex-1 items-center justify-start">
                        <span className="sr-only">Your Company</span>
                        <Image
                            alt=""
                            width={45}
                            height={45}
                            src="/mavericks_m.png"
                            className="h-12 w-auto mr-4"
                        />
                        <span className={`inline-block text-xl font-extralight text-gray-400 md:text-2xl xl:text-4xl`}><span className={`font-serif text-amber-400`}>Maverick&#39;s</span> Cocktail Lounge</span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6"/>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                            {item.name}
                        </a>
                    ))}
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50"/>
                <DialogPanel
                    className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image
                                alt=""
                                width={45}
                                height={45}
                                src="/mavericks_m.png"
                                className="h-12 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-400"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/25">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            {/*<div className="py-6">*/}
                            {/*  <a*/}
                            {/*      href="#"*/}
                            {/*      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-800"*/}
                            {/*  >*/}
                            {/*    Log in*/}
                            {/*  </a>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </div>
    );
}
