import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { fetchChampionData } from "../../api/champions";
import { useEffect, useState } from "react";
import Roles from "../../components/Roles";
import Dificultad from "../../components/Dificultad";
import Spells from "../../components/Spells";
import Skins from "../../components/Skins";
import Footer from "../../components/Footer";

const ChampionDetails = () => {
  const [champ, setChamp] = useState([]);
  const [spells, setSpells] = useState([]);
  const [passive, setPassive] = useState("");
  const [skins, setSkins] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getChampions = async () => {
      const data = await fetchChampionData(id);
      console.log("antes", data);
      if (data) {
        setChamp(data["data"][`${id}`]);
        setSpells(data["data"][`${id}`]["spells"]);
        setPassive(data["data"][`${id}`]["passive"]);
        setSkins(data["data"][`${id}`]["skins"]);
      } else {
        console.log("error");
      }
    };

    getChampions();
  }, [id]);

  return (
    <main className="bg-sky-900 max-w-[1920px] h-full mx-auto">
      <Header />
      <div
        className="relative  bg-cover h-[1000px] bg-no-repeat bg-center w-full"
        style={{
          backgroundImage: `url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg')`,
        }}
      >
        <div className="h-full absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent">
          <div className="absolute left-[185px] flex flex-col items-center justify-center text-white p-4 h-full">
            <div className="text-left flex flex-col gap-5">
              <h3 className="text-[#c8aa6e] font-lol text-[32px] italic font-bold uppercase">
                {champ.title}
              </h3>
              <h2 className="text-white font-lol tracking-wide font-semibold text-7xl italic uppercase ">
                {champ.name}
              </h2>
              <div className="max-w-[700px]">
                <p className="font-lol font-normal text-white text-lg">
                  {champ.lore}
                </p>
              </div>
              <div className="flex gap-4 mt-6 ">
                <div className="p-2 size-32 border border-[#c8aa6e] flex flex-col">
                  <div className="bg-[#0a1428]/70 flex flex-col justify-between h-full p-2">
                    <Roles tags={champ.tags} />
                    <div className=" ">
                      <h3 className="text-white font-lol font-medium text-xs uppercase text-center">
                        Rol
                      </h3>
                      <h3 className=" font-lol font-light text-xs text-[#c8aa6e] uppercase text-center">
                        {champ.tags && champ.tags.join(" / ")}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-2 size-32 border border-[#c8aa6e] flex flex-col">
                  <div className="bg-[#0a1428]/70 flex flex-col justify-between h-full p-2">
                    {champ.info?.difficulty !== undefined ? (
                      <Dificultad level={champ.info.difficulty} />
                    ) : (
                      <p className="text-white text-xs uppercase">
                        Cargando dificultad...
                      </p>
                    )}
                    <div>
                      <h3 className="text-white font-lol font-medium text-xs uppercase text-center">
                        Dificultad
                      </h3>
                      <h3 className="font-lol font-light text-xs text-[#c8aa6e] uppercase text-center">
                        {champ.info?.difficulty !== undefined
                          ? champ.info.difficulty <= 3
                            ? "Baja"
                            : champ.info.difficulty <= 7
                            ? "Media"
                            : "Alta"
                          : "Cargando..."}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute left-0 bottom-20 border-t border-[#c8aa6e] w-full font-lol font-light text-xs flex gap-5 pt-1 uppercase
              "
            >
              <p className="text-white/60">Maestría de campeón</p>
              <a className="hover:underline hover:text-[#c8aa6e]" href="">
                Leagueofgraphs.com
              </a>
              <a className="hover:underline hover:text-[#c8aa6e]" href="">
                op.gg
              </a>
              <a className="hover:underline hover:text-[#c8aa6e]" href="">
                probuilds.com
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Habilidades */}
      <section className="w-full bg-[#0A1428] h-[700px]">
        <Spells data={spells} passive={passive} />
      </section>
      {/* Skins */}
      <section className="w-full bg-white h-[1400px]">
        <Skins data={skins} id={id} />
      </section>
      {/* Footer */}
      <section className="w-full h-[530px]">
        <Footer />
      </section>
    </main>
  );
};

export default ChampionDetails;
