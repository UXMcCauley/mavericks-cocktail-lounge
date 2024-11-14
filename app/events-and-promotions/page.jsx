import EventsGrid from "../components/eventsGrid";

export const metadata = {
  title: `Mavericks`,
}

export default function EventsAndPromotions() {

  return (
      <div>
          {/* Header section */}
          <div className="px-6 lg:px-8">
              <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
                  <h1 className="text-5xl tracking-tighter text-white sm:text-7xl font-extralight font-serif">Events and Promotions</h1>
              </div>
          </div>
          <EventsGrid/>
      </div>
  )
}
