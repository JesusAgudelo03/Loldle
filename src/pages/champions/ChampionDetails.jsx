import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { fetchChampionData } from "../../api/champions";
import { useEffect, useState } from "react";

const ChampionDetails = () => {
  const [champ, setChamp] = useState([]);
  const { id } = useParams(); // Obtiene el parámetro dinámico de la URL

    useEffect(() => {
      const getChampions = async () => {
        const data = await fetchChampionData(id);
        console.log("antes",data);
        if (data){
          setChamp(data["data"][`${id}`]);
          console.log( "data en champions", data["data"])
        } else{
          console.log("error")
        }
      }
      
      getChampions();
    }, [id]);


  return (
    <main className='min-h-screen bg-sky-900'>
      <Header />
      <h1>Detalles del campeón: {id}</h1>
      <h1>Nombres: {champ["title"]}</h1>
      <h1>Nombres: {champ["id"]}</h1>
      <h1>Nombres: {champ["lore"]}</h1>


      <h1>Nombres: {champ["tags"]}</h1>
      

    </main>
  );
};

export default ChampionDetails;
