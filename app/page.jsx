import {
  AcademicCapIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'
import Image from "next/image";

export const metadata = {
  title: `Maverick\'s Cocktail Lounge`,
  description: 'Discover Hartford, Wisconsin\'s best-kept secret. Raise a glass at Maverick\'s, where every drink is an adventure and every guest is family.'

}

const stats = [
  { label: 'Business was founded', value: '2024' },
  { label: 'Mixologists on the team', value: '7' },
  { label: 'Craft Cocktails and Beer', value: '113' },
]
const values = [
  {
    name: 'Be world-class.',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Take responsibility.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: HandRaisedIcon,
  },
  {
    name: 'Be supportive.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus voluptas blanditiis et.',
    icon: UserGroupIcon,
  },
  {
    name: 'Always learning.',
    description: 'Iure sed ab. Aperiam optio placeat dolor facere. Officiis pariatur eveniet atque et dolor.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Share everything you know.',
    description: 'Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.',
    icon: SparklesIcon,
  },
  {
    name: 'Enjoy downtime.',
    description: 'Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat.',
    icon: SunIcon,
  },
]

export default function Home() {

  return (
      <div>
        {/* Header section */}
        <div className="px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
            <h1 className="text-5xl tracking-tighter text-white sm:text-7xl font-extralight font-serif">Maverick&apos;s <span className={`block font-sans text-pink-400 text-3xl uppercase font-extralight tracking-widest`}>Cocktail
                Lounge</span></h1>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 divide-y-[1px] px-4 divide-indigo-900 text-center text-base/7 text-gray-300 lg:divide-y-0 lg:max-w-none lg:grid-cols-2">
              <div>
                <h2 className={`text-2xl font-serif text-pink-400 mb-3`}>A Speakeasy Experience Like No Other</h2>
                <p>Step into Maverick&#39;s, where the charm of the Prohibition era meets the artistry of modern
                  mixology. Nestled in the heart of Hartford, Wisconsin, our speakeasy-style cocktail lounge offers a
                  haven for those seeking craft drinks, a mellow ambiance, and a sense of community.</p>
              </div>
              <div className={`pt-6 lg:pt-0`}>
                <h2 className={`text-2xl font-serif text-pink-400 mb-3`}>Crafted Cocktails, Tailored for You</h2>
                <p>At Maverick&#39;s, every cocktail tells a story. Our talented mixologists blend premium spirits with house-made syrups, fresh ingredients, and a dash of creativity to craft drinks that surprise and delight. Whether you&#39;re a connoisseur of the classics or an adventurer seeking bold new flavors, our menu has something to inspire your palate.</p>
              </div>
              <div className={`pt-6 lg:pt-0`}>
                <h2 className={`text-2xl font-serif text-pink-400 mb-3`}>Mellow Setting, Timeless Vibes</h2>
                <p>Step away from the rush of the world and into a space designed for relaxation and connection. Low lighting, vintage decor, and soulful tunes set the stage for intimate conversations and unforgettable evenings. Whether you&#39;re here for a quiet date night, a gathering with friends, or a solo escape, Maverick&#39;s is your retreat.</p>
              </div>
              <div className={`pt-6 lg:pt-0`}>
                <h2 className={`text-2xl font-serif text-pink-400 mb-3`}>Rooted in Community</h2>
                <p>We believe that a great cocktail lounge is more than just a bar; it&#39;s a cornerstone of the community. Maverick&#39;s is proud to host local events, feature ingredients from Wisconsin&#39;s finest artisans, and create a welcoming space where everyone feels at home. We’re not just serving drinks; we’re building connections.</p>
              </div>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-3 sm:gap-y-16 lg:mt-28 lg:grid-cols-3">
              {stats.map((stat, statIdx) => (
                  <div key={statIdx} className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                    <dt className="text-base/7 text-gray-300">{stat.label}</dt>
                    <dd className="text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                  </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <Image
              alt=""
              src="/bar.png"
              width={640}
              height={640}
              className="aspect-[9/4] w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">Plan Your Visit</h2>
            <p className="mt-6 text-lg/8 text-gray-300">
              Located in the heart of Hartford, Maverick&#39;s invites you to discover your new favorite spot. Walk through our unassuming entrance and find yourself transported to a world of elegance, flavor, and camaraderie.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
            {values.map((value) => (
                <div key={value.name} className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    <value.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-indigo-500" />
                    {value.name}
                  </dt>{' '}
                  <dd className="inline">{value.description}</dd>
                </div>
            ))}
          </dl>
        </div>
      </div>
  )
}
