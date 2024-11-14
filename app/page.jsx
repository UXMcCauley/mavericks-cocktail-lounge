import {
    MapPinIcon,
    PhoneIcon,
    ClockIcon,
    EyeIcon
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
  { label: 'You\'ll have an amazing time', value: '100%' },
]
const values = [
  {
    name: 'Location',
    description: '25 W Sumner St, Hartford, WI, United States, Wisconsin',
    icon: MapPinIcon,
  },
  {
    name: 'Phone',
    description: '(262) 434-9273',
    icon: PhoneIcon,
  },
  {
    name: 'Hours',
    description: '2pm - 11pm (for now)',
    icon: ClockIcon,
  },
  {
    name: 'We\'re inconspicuous',
    description: 'There is no obvious signage. That\'s on purpose. We are just a few steps west of Main St. on the North side of Sumner (HWY 60).',
    icon: EyeIcon,
  },
]

export default function Home() {

  return (
      <div>
        {/* Header section */}
        <div className="px-6 pt-24 lg:px-8">
          <div className="mx-auto max-w-7xl text-center relative mt-4 ring-2 ring-opacity-20 ring-indigo-400 rounded-2xl">
            <Image alt={'Mavericks owner and operator'} className={`aspect-[9/4] w-full object-cover rounded-2xl rounded-b-none md:rounded-b-2xl`} src={'/bobby-bar.jpg'} width={1000} height={1000} />
            <div className="bg-opacity-80 p-4 rounded-xl bg-gray-900 shadow-xl text-2xl tracking-tighter text-amber-400 font-extralight font-serif rounded-t-none md:rounded-t-xl  md:absolute md:bottom-10 md:left-10">A speakeasy experience like no other.</div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 divide-y-[1px] px-4 divide-indigo-900  text-base/7  lg:divide-y-0 lg:max-w-none lg:grid-cols-2">
              <div>
                <h2 className={`text-2xl mb-3`}>A Speakeasy Experience Like No Other</h2>
                <p className={`text-gray-400 text-sm`}>Step into Maverick&#39;s, where the charm of the Prohibition era meets the artistry of modern
                  mixology. Nestled in the heart of Hartford, Wisconsin, our speakeasy-style cocktail lounge offers a
                  haven for those seeking craft drinks, a mellow ambiance, and a sense of community.</p>
              </div>
              <div className={`pt-6 lg:pt-0`}>
                <h2 className={`text-2xl mb-3`}>Crafted Cocktails, Tailored for You</h2>
                <p className={`text-gray-400 text-sm`}>At Maverick&#39;s, every cocktail tells a story. Our talented mixologists blend premium spirits with house-made syrups, fresh ingredients, and a dash of creativity to craft drinks that surprise and delight. Whether you&#39;re a connoisseur of the classics or an adventurer seeking bold new flavors, our menu has something to inspire your palate.</p>
              </div>
              <div className={`pt-6 lg:pt-0`}>
                <h2 className={`text-2xl mb-3`}>Mellow Setting, Timeless Vibes</h2>
                <p className={`text-gray-400 text-sm`}>Step away from the rush of the world and into a space designed for relaxation and connection. Low lighting, vintage decor, and soulful tunes set the stage for intimate conversations and unforgettable evenings. Whether you&#39;re here for a quiet date night, a gathering with friends, or a solo escape, Maverick&#39;s is your retreat.</p>
              </div>
              <div className={`pt-6 lg:pt-0`}>
                <h2 className={`text-2xl mb-3`}>Rooted in Community</h2>
                <p className={`text-gray-400 text-sm`}>We believe that a great cocktail lounge is more than just a bar; it&#39;s a cornerstone of the community. Maverick&#39;s is proud to host local events, feature ingredients from Wisconsin&#39;s finest artisans, and create a welcoming space where everyone feels at home. We’re not just serving drinks; we’re building connections.</p>
              </div>
            </div>

            <dl className="mt-16 max-w-screen-7xl p-6 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 md:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
              {stats.map((stat, statIdx) => (
                  <div key={statIdx} className="flex items-center justify-between sm:flex-col gap-y-3 md:border-l md:border-white/20 pl-6 sm:justify-start sm:items-start">
                    <div className="flex w-1/4 justify-end text-3xl font-semibold tracking-tight text-amber-400 mr-4 sm:justify-start sm:w-auto">{stat.value}</div>
                    <div className="flex w-3/4 text-gray-300 sm:w-auto">{stat.label}</div>
                  </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-16 xl:mx-auto max-w-7xl px-6 lg:px-8">
          <Image
              alt=""
              src="/bar.png"
              width={640}
              height={640}
              className="aspect-[9/4] w-full object-cover rounded-xl shadow-xl ring-2 ring-opacity-20 ring-indigo-400 xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div className={`mx-auto max-w-2xl lg:mx-0 lg:max-w-none md:flex`}>
            <div className="mx-auto mb-12 md:w-1/2 lg:w-1/3">
              <h2 className={`text-2xl mb-3`}>Plan your visit</h2>
              <p className={`text-gray-400 text-sm`}>Located in the heart of Hartford, Maverick&#39;s invites you to
                discover your new favorite spot. Walk
                through our unassuming entrance and find yourself transported to a world of elegance, flavor, and
                camaraderie.</p>
            </div>
            <dl className="mx-auto md:w-1/2 lg:w-2/3 grid md:ml-16 grid-cols-1 gap-8 text-base/7 text-gray-300 md:grid-cols-1 lg:grid-cols-2 lg:mx-0 lg:max-w-none ">
              {values.map((value) => (
                  <div key={value.name} className="relative pl-16">
                    <dt className="inline font-semibold text-white">
                      <value.icon aria-hidden="true" className="absolute left-1 top-1 size-10 text-amber-400"/>
                      <p>{value.name}</p>
                    </dt>
                    {' '}
                    <dd className="inline font-extralight">{value.description}</dd>
                  </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
  )
}
