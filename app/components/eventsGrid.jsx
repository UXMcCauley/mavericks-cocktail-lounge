import Link from "next/link";

export default function EventsGrid() {
    return (
        <div className="">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                    <div className="flex p-px lg:col-span-4">
                        <div className="overflow-hidden rounded-lg bg-opacity-30 bg-gray-800  max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
                            <img
                                alt=""
                                src="/bar.png"
                                className="aspect-[9/4] w-full box-border mx-auto object-cover shadow-xl border border-indigo-900 xl:rounded-tr-lg lg:rounded-tl-[2rem]"
                            />
                            <div className="">
                                <div className={`p-10`}><h3 className="text-sm/4 font-semibold text-gray-400">Always About You</h3>
                                    <p className="mt-2 text-lg font-medium tracking-tight text-white">We offer a variety
                                        of daily specials to please your taste buds and your bank account.</p></div>
                                <div className={`w-full snap-x snap-mandatory overflow-x-scroll flex flex-nowrap pb-4`}>
                                    <div className={`snap-always snap-center`}>
                                        <div
                                            className={`h-full w-[220px] mx-4 flex flex-col rounded-xl overflow-hidden border border-opacity-10 border-gray-100 bg-opacity-10 bg-gray-900 shadow-xl hover:border-opacity-20 hover:shadow-2xl transition-all duration-300 cursor-default snap-center`}>
                                            <div
                                                className={` bg-gray-900 font-extralight px-4 py-2`}>
                                                <div className={`text-xs text-gray-400`}>Monday</div>
                                                <div className={`text-xl text-amber-500`}>Industry Night</div>
                                            </div>
                                            <div className={`flex-grow p-4 font-extralight text-sm`}>
                                                We get it! You deserve a break. Sunday nights are 20% off for service
                                                industry professionals.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`snap-always snap-center`}>
                                        <div
                                            className={`h-full w-[220px] mr-4 flex flex-col rounded-xl overflow-hidden border border-opacity-10 border-gray-100 bg-opacity-10 bg-gray-900 shadow-xl hover:border-opacity-20 hover:shadow-2xl transition-all duration-300 cursor-default snap-center`}>
                                            <div
                                                className={`bg-gray-900 font-extralight px-4 py-2`}>
                                                <div className={`text-xs text-gray-400`}>Tuesday</div>
                                                <div className={`text-xl text-amber-500`}>Trivia Night</div>
                                            </div>
                                            <div className={`flex-grow p-4 font-extralight text-sm`}>
                                                Test your knowledge while enjoying $5 select cocktails.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`snap-always snap-center`}>
                                        <div
                                            className={`h-full w-[220px] mr-4 flex flex-col rounded-xl overflow-hidden border border-opacity-10 border-gray-100 bg-opacity-10 bg-gray-900 shadow-xl hover:border-opacity-20 hover:shadow-2xl transition-all duration-300 cursor-default`}>
                                            <div
                                                className={`bg-gray-900 font-extralight px-4 py-2`}>
                                                <div className={`text-xs text-gray-400`}>Wednesday</div>
                                                <div className={`text-xl text-amber-500`}>Ladies Night</div>
                                            </div>
                                            <div className={`flex-grow p-4 font-extralight text-sm`}>
                                                Exclusive drink specials for all the fabulous ladies.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`snap-always snap-center`}>
                                        <div
                                            className={`h-full w-[220px] mr-4 flex flex-col rounded-xl overflow-hidden border border-opacity-10 border-gray-100 bg-opacity-10 bg-gray-900 shadow-xl hover:border-opacity-20 hover:shadow-2xl transition-all duration-300 cursor-default`}>
                                            <div
                                                className={`bg-gray-900 font-extralight px-4 py-2`}>
                                                <div className={`text-xs text-gray-400`}>Thursday</div>
                                                <div className={`text-xl text-amber-500`}>Live Music</div>
                                            </div>
                                            <div className={`flex-grow p-4 font-extralight text-sm`}>
                                                Sip on Wisconsin’s best craft beers while enjoying live performances.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`snap-always snap-center`}>
                                        <div
                                            className={`h-full w-[220px] mr-4 flex flex-col rounded-xl overflow-hidden border border-opacity-10 border-gray-100 bg-opacity-10 bg-gray-900 shadow-xl hover:border-opacity-20 hover:shadow-2xl transition-all duration-300 cursor-default`}>
                                            <div
                                                className={`bg-gray-900 font-extralight px-4 py-2`}>
                                                <div className={`text-xs text-gray-400`}>Friday</div>
                                                <div className={`text-xl text-amber-500`}>Mixologist&#39;s Choice</div>
                                            </div>
                                            <div className={`flex-grow p-4 font-extralight text-sm`}>
                                                Try our bartender’s unique creations, available for one night only.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className=" px-10 pb-10 mt-8 text-sm/6 text-gray-400">
                                    Stay in the loop on upcoming events, seasonal menu changes, and exclusive specials.
                                    Follow Maverick’s on <Link className={`text-indigo-400 underline`}
                                                               href={'https://www.facebook.com/profile.php?id=61563790535716'}
                                                               target={'_blank'}>Facebook</Link> and join our community
                                    of cocktail enthusiasts.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex p-px lg:col-span-2">
                        <div
                            className="overflow-hidden rounded-lg  bg-opacity-30 bg-gray-800 lg:rounded-tr-[2rem]">
                            <img
                                alt=""
                                src="/drag-promo-neon.png"
                                className="aspect-[9/9] w-full box-border mx-auto object-cover shadow-xl border border-indigo-900 xl:rounded-tl-lg lg:rounded-tr-[2rem]"
                            />
                            <div className="p-10">
                                <h3 className="text-sm/4 font-semibold text-gray-400">December 7, 2024 at 9:30pm</h3>
                                <p className="mt-2 text-lg font-medium tracking-tight text-white">Drag Show</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                                    Join us for a drag show on December 7th at Mavericks Cocktail Lounge! 🎤🍹👑 We&#39;ll have a night of fun, entertainment, and glamour, featuring talented queens and performances. Don&#39;t forget to bring your singles to show the queens some love! 💰 We can&#39;t wait to see you all there! 🎉
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex p-px lg:col-span-2">
                        <div className="overflow-hidden rounded-lg  bg-opacity-30 bg-gray-800 lg:rounded-bl-[2rem]">
                            <img
                                alt=""
                                src="https://tailwindui.com/plus/img/component-images/bento-02-security.png"
                                className="h-80 object-cover object-center"
                            />
                            <div className="p-10">
                                <h3 className="text-sm/4 font-semibold text-gray-400">Security</h3>
                                <p className="mt-2 text-lg font-medium tracking-tight text-white">Advanced access control</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex p-px lg:col-span-4">
                        <div className="overflow-hidden rounded-lg  bg-opacity-30 bg-gray-800 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
                            <img
                                alt=""
                                src="https://tailwindui.com/plus/img/component-images/bento-02-performance.png"
                                className="h-80 object-cover object-left"
                            />
                            <div className="p-10">
                                <h3 className="text-sm/4 font-semibold text-gray-400">Performance</h3>
                                <p className="mt-2 text-lg font-medium tracking-tight text-white">Lightning-fast builds</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                                    Sed congue eros non finibus molestie. Vestibulum euismod augue vel commodo vulputate. Maecenas at
                                    augue sed elit dictum vulputate.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
