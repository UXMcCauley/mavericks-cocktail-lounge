import Image from "next/image";

const drinks = [
    {
        name: 'A Splash for Color',
        role: 'Delightful mix of elegance and tropic.',
        imageUrl:
            '/a-splash-for-color.png',
    },
    {
        name: 'Athena\'s Garden',
        role: 'Delightful mix of elegance and tropic.',
        imageUrl:
            '/athenas-garden.png',
    },
    {
        name: 'The Last Word',
        role: 'Delightful mix of elegance and tropic.',
        imageUrl:
            '/the-last-word.png',
    },
    {
        name: 'A Splash for Color 2',
        role: 'Delightful mix of elegance and tropic.',
        imageUrl:
            '/a-splash-for-color.png',
    },
    {
        name: 'Athena\'s Garden 2',
        role: 'Delightful mix of elegance and tropic.',
        imageUrl:
            '/athenas-garden.png',
    },
    {
        name: 'The Last Word 2',
        role: 'Delightful mix of elegance and tropic.',
        imageUrl:
            '/the-last-word.png',
    },
    {
        name: 'A Splash for Color 3',
        role: 'Delightful mix of elegance and tropic.',
        imageUrl:
            '/a-splash-for-color.png',
    },
    {
        name: 'Athena\'s Garden 3',
        role: 'Delightful mix of elegance and tropic.',
        imageUrl:
            '/athenas-garden.png',
    },
    {
        name: 'The Last Word 3',
        role: 'Delightful mix of elegance and tropic.',
        imageUrl:
            '/the-last-word.png',
    },
]

export default function CocktailGrid() {
    return (
        <div className=" sm:py-20">
            <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                <ul
                    role="list"
                    className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
                >
                    {drinks.map((drink) => (
                        <li key={drink.name} className="rounded-2xl shadow-xl bg-opacity-30 bg-gray-800 px-8 py-10">
                            <Image alt="" width={340} height={340} src={drink.imageUrl} className="mx-auto size-48 rounded-full md:size-56" />
                            <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-white">{drink.name}</h3>
                            <p className="text-sm/6 text-gray-400">{drink.role}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
