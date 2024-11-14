import './globals.css'
import Header from "./components/header";
import Footer from "./components/footer";

export default function RootLayout({ children }) {

  return (
      <html>
          <body>
              <div className="bg-gray-900">
                  {/* Header */}
                  <Header/>
                  <main className="relative isolate">
                      {/* Background */}
                      <div
                          aria-hidden="true"
                          className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                      >
                          <div
                              style={{
                                  clipPath:
                                      'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                              }}
                              className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                          />
                      </div>
                      {children}
                  </main>
                  <Footer/>
              </div>
          </body>
      </html>

  );
}
