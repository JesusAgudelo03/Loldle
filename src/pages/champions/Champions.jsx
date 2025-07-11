import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { fetchChampions } from "../../api/champions";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

function Champions() {
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    const getChampions = async () => {
      const data = await fetchChampions();
      if (data) {
        const championsArray = Object.values(data.data);
        setChampions(championsArray);
        console.log("data en champions", data);
      } else {
        console.log("error");
      }
    };

    getChampions();
  }, []);

  return (
    <main className="min-h-screen mt-24 max-w-[1920px] mx-auto bg-sky-900 ">
      <Header />
      <div className="flex items-center justify-center md:mx-4 xl:mx-40 ">
        <section
          className="w-full min-h-screen my-4 mx-4 border-y-2 
  border-white p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10"
        >
          {champions.length > 0 ? (
            champions.map((champion) => {
              return (
                <Link
                  to={`/champs/${champion.id}`}
                  key={champion.id}
                  className="relative flex flex-col shadow-sm overflow-hidden bg-black
                  group"
                >
                  <div className="relative overflow-hidden w-full aspect-[2/3] max-h-[500px]">
                    <img
                      src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                      alt={champion.name}
                      className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out
                      scale-100 group-hover:scale-[1.2] "
                    />
                    <h3
                      className="pl-4 font-lol uppercase font-semibold italic w-full text-left p-1 md:p-4 absolute bottom-0
                      bg-sky-950 text-base md:text-lg text-white transition-colors duration-300 ease-in-out group-hover:bg-sky-700 group-hover:text-[#c8aa6e] "
                    >
                      {champion.name}
                    </h3>
                  </div>
                </Link>
              );
            })
          ) : (
            <p className="text-gray-500 col-span-4 text-center">
              Cargando campeones...
            </p>
          )}
        </section>
      </div>
      <section className="w-full h-[530px]">
        <Footer />
      </section>
    </main>
  );
}

export default Champions;
