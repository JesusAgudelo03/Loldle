const CHAMPIONS_API_URL =
  "https://ddragon.leagueoflegends.com/cdn/15.13.1/data/es_MX/champion.json";
const CHAMPIONS_IMAGES_URL =
  "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/";
const CHAMPIONS_DETAILS_URL =
  "https://ddragon.leagueoflegends.com/cdn/15.13.1/data/es_MX/champion/";
const SPELL_IMAGES_URL =
  "https://ddragon.leagueoflegends.com/cdn/15.13.1/img/spell/";

export const fetchChampions = async () => {
  try {
    const response = await fetch(CHAMPIONS_API_URL);
    if (!response.ok) {
      throw new Error(`Error al obtener los campeions :%{response.statusText}`);
    }

    const data = await response.json();
    console.log("campeones obtenidos", data);
    return data;
  } catch (error) {
    console.error("Error al obtener los campeones", error);
    return [];
  }
};

export const fetchChampionImage = async (championName) => {
  try {
    const response = await fetch(
      `${CHAMPIONS_IMAGES_URL}${championName}_0.jpg`
    );
    if (!response.ok) {
      throw new Error(
        `Error al obtener la imagen del campeón :%{response.statusText}`
      );
    }
    return response;
  } catch (error) {
    console.error("Error al obtener la imagen del campeón", error);
    return null;
  }
};
export const fecthSpellImage = async (id) => {
  try {
    const response = await fetch(`${SPELL_IMAGES_URL}${id}.png`);
    if (!response.ok) {
      throw new Error(
        `Error al obtener la imagen del campeón :%{response.statusText}`
      );
    }
    return response;
  } catch (error) {
    console.error("Error al obtener la imagen del campeón", error);
    return null;
  }
};

export const fetchChampionData = async (championName) => {
  try {
    const response = await fetch(
      `${CHAMPIONS_DETAILS_URL}${championName}.json`
    );
    if (!response.ok) {
      throw new Error(
        `Error al obtener la imagen del campeón :%{response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener la imagen del campeón", error);
    return null;
  }
};

export const championNameFormated = {
  AurelionSol: "Aurelion Sol",
  Bard: "Bardo",
  Belveth: "Bel'Veth",
  Chogath: "Cho'Gath",
  DrMundo: "Dr. Mundo",
  JarvanIV: "Jarvan IV",
  Kaisa: "Kai'Sa",
  Khazix: "Kha'Zix",
  KogMaw: "Kog'Maw",
  KSante: "K'Sante",
  Leblanc: "LeBlanc",
  LeeSin: "Lee Sin",
  MasterYi: "Master Yi",
  MissFortune: "Miss Fortune",
  MonkeyKing: "Wukong",
  Nunu: "Nunu & Willump",
  RekSai: "Rek'Sai",
  Renata: "Renata Glasc",
  TahmKench: "Tahm Kench",
  TwistedFate: "Twisted Fate",
  Velkoz: "Vel'Koz",
  XinZhao: "Xin Zhao",
};
