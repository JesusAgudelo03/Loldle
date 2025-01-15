import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { fetchChampionData } from "../../api/champions";
import { useEffect, useState } from "react";
import Roles from "../../components/Roles";
import Dificultad from "../../components/Dificultad";

const ChampionDetails = () => {
  const [champ, setChamp] = useState([]);
  const { id } = useParams();

    useEffect(() => {
      const getChampions = async () => {
        const data = await fetchChampionData(id);
        console.log("antes",data);
        if (data){
          setChamp(data["data"][`${id}`]);
          console.log( "data en champions", data["data"])
          console.log("diff", data["data"][`${id}`]["info"])
        } else{
          console.log("error")
        }
      }
      
      getChampions();
    }, [id]);


  return (
    <main className='bg-sky-900'>
      <Header />
      <div  className="h-screen my-10 bg-cover bg-center" 
        style={{backgroundImage: `url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg')`}}>
        <div
          className="flex items-center justify-center h-full bg-gradient-to-r from-black via-black/50 to-transparent" 
        >
            <div className="absolute left-[185px] flex flex-col items-center justify-center text-white p-4 h-full">
              <div className="text-left flex flex-col gap-5">
                <h3 className="text-[#c8aa6e] font-lol text-[32px] italic font-bold uppercase">{champ.title}</h3>
                <h2 className="text-white font-lol font-extrabold text-7xl italic uppercase ">{champ.name}</h2>
                <div className="max-w-[700px]">
                  <p className="font-lol font-medium text-white text-xl">{champ.lore}</p>
                </div>
                <div className="flex gap-4 mt-6">
                  <div className="p-2 border border-[#c8aa6e] w-fit flex flex-col gap">
                    <div className="bg-[#0a1428]/70 py-2 px-5 flex flex-col justify-between items-center ">
                      <Roles tags={champ.tags} />
                      <div className=" ">
                        <h3 className="text-white font-lol font-medium text-xs uppercase text-center">Rol</h3>
                        <h3 className=" font-lol font-light text-xs text-[#c8aa6e] uppercase text-center">{champ.tags && champ.tags.join(' / ')}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 border border-[#c8aa6e] w-fit flex flex-col gap">
                    <div className="bg-[#0a1428]/70 py-2 px-5 h-full flex flex-col justify-between items-center">
                      {champ.info?.difficulty !== undefined ? (
                        <Dificultad level={champ.info.difficulty} />
                      ) : (
                        <p className="text-white text-xs uppercase">Cargando dificultad...</p>
                      )}
                      <div>
                        <h3 className="text-white font-lol font-medium text-xs uppercase text-center">
                          Dificultad
                        </h3>
                        <h3 className="font-lol font-light text-xs text-[#c8aa6e] uppercase text-center">
                          {champ.info?.difficulty !== undefined ? (
                            champ.info.difficulty <= 3
                              ? "Baja"
                              : champ.info.difficulty <= 7
                              ? "Media"
                              : "Alta"
                          ) : (
                            "Cargando..."
                          )}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 bottom-20 border-t border-[#c8aa6e] w-full font-lol font-light text-xs flex gap-5 pt-1 uppercase
              ">
                <p className="text-white/60">Maestría de campeón</p>
                <a className="hover:underline hover:text-[#c8aa6e]" href="">Leagueofgraphs.com</a>
                <a className="hover:underline hover:text-[#c8aa6e]" href="">op.gg</a>
                <a className="hover:underline hover:text-[#c8aa6e]" href="">probuilds.com</a>
              </div>
            </div>
        </div>
      </div>
    </main>
  );
};

export default ChampionDetails;
