
import Header from "../../components/Header"
import  {useEffect, useState} from "react";
import { fetchChampions } from "../../api/champions";
import { Link } from "react-router-dom";



function Champions() {
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    const getChampions = async () => {
      const data = await fetchChampions();
      if (data){
        const championsArray = Object.values(data.data);
        setChampions(championsArray);
        console.log( "data en champions", data)
      } else{
        console.log("error")
      }
    }

    getChampions();
    
  }, []);


  return (
    <main className='min-h-screen bg-sky-900 mt-24 max-w-[1920px] mx-auto'>
      <Header />
      <div className='flex items-center justify-center w-full mx-auto'>
      <section className="w-full md:mx-48 min-h-screen border-y-2 my-4 mx-4 border-white p-4 grid grid-cols-2 md:grid-cols-4 gap-10">
        {champions.length > 0 ? (
          champions.map((champion) => {
            return (
              <Link to={`/champs/${champion.id}`} key={champion.id}
                className="hover:shadow-lg hover:shadow-black relative flex flex-col  bg-white shadow-lg overflow-hidden object-contain group"
              >
                <div className="relative overflow-hidden w-full bg-top h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]"> 
                  <img
                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                    alt={champion.name}
                    className="w-full h-full object-cover object-top align-top transition-transform duration-300 ease-in-out scale-105 group-hover:scale-[1.2]"
                  />
                  <h3 className="pl-4 font-lol uppercase font-bold italic w-full text-left p-4 absolute bottom-0 bg-sky-950 text-lg text-white transition-colors duration-300 ease-in-out group-hover:bg-sky-700">
                    {champion.name}
                  </h3>
                </div>
              </Link>
            );
          })
        ) : (
          <p className="text-gray-500 col-span-4 text-center">Cargando campeones...</p>
        )}
      </section>
      </div>
    </main>
  )
}

export default Champions
