import CocktailGrid from "../components/cocktailGrid";

export const metadata = {
  title: `Mavericks`,
}

export default function Cocktails() {

  return (
      <div>
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
            <h1 className="text-5xl tracking-tighter text-white sm:text-7xl font-extralight font-serif">Our Notable Cocktails</h1>
          </div>
        </div>
        <CocktailGrid/>
      </div>
  )
}
