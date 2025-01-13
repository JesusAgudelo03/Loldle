
import { Link } from "react-router-dom";

const Header = () => {

  const routes = [
    {
      name: "Home",
      path: '/',
    },
    {
      name: "Champions",
      path: '/champs',
    },
  ]


  return (


  <header className="bg-sky-950 border-b border-white font-lol font-light text-xl">
    <div className="h-20 max-w-4xl mx-auto flex items-center justify-between px-4">
      <p className="font-lol font-bold text-white text-5xl">
        Loldle
      </p>
      <nav className="flex gap-8 text-white">
        {
          routes.map((route, index) => {
            return (
              <Link to={route.path} key={index} className="hover:underline hover:text-sky-600 transition-all">
                {route.name}
              </Link>
            )
          })
        }
      </nav>
    </div>
  </header>
  )
}

export default Header