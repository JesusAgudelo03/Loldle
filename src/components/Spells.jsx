import PropTypes from 'prop-types';
import ImageSpells from './imageSpells';
import { useState } from 'react';

const Spells = ({ data, passive }) => {
  const [selected, setSelected] = useState("passive");
  const [spellIndex, setSpellIndex] = useState(0);
  const spellLabels = ['PASIVE', 'Q', 'W', 'E', 'R'];


  const cleanDescription = (description) => {
    return description
      .replace(/\\u003C/g, "<") // Decodifica \u003C como <
      .replace(/\\u003E/g, ">") // Decodifica \u003E como >
      .replace(/<[^>]*>/g, "") // Elimina las etiquetas HTML
      .replace(/\\'/g, "'") // Decodifica comillas simples
      .replace(/\\"/g, '"') // Decodifica comillas dobles
      .replace(/&#x27;/g, "'") // Decodifica entidades HTML
      .replace(/&quot;/g, '"'); // Decodifica entidades HTML
  };

  const handleSelect = (name, index) => {
    setSelected(name); 
    setSpellIndex(index)
  };

  if (!data || data.length === 0 || !passive) {
    return <p className="text-white">Cargando habilidades...</p>; 
  }

  return (
    <div className="flex h-full">
      <div className="flex-1 flex items-center justify-center text-center">
        <div>
          <p className="font-lol text-6xl italic uppercase font-bold text-white mb-8">
            Habilidades
          </p>
          <div 
            className="flex flex-row items-start justify-center gap-1 py-4 ">
            <ImageSpells
              img={`https://ddragon.leagueoflegends.com/cdn/15.1.1/img/passive/${passive.image.full}`}
              text={passive.name}
              isSelected={selected === 'passive'}
              onClick={() => handleSelect('passive', 0)} 
            />

            {data.map((spell, index) => (
              <ImageSpells
                key={spell.id}
                img={`https://ddragon.leagueoflegends.com/cdn/15.1.1/img/spell/${spell.id}.png`}
                text={spell.name}
                isSelected={selected === spell.id} 
                onClick={() => handleSelect(spell.id, index+1)} 
              />
            ))}
          </div>


        </div>
      </div>
      <div className="flex-1 p-4 flex flex-col h-full gap-2 font-lol ">
        <div className="mx-auto w-3/5 h-3/5 border border-[#c8aa6e] mt-12 mb-4">
          <div className='relative w-full h-full flex items-center justify-center'>
            <p className='absolute top-0 left-4 text-white/40 text-center italic font-bold font-lol text-2xl'>
              {selected === "passive"
                ? cleanDescription(passive.name)
                : cleanDescription(
                  data.find((spell) => spell.id === selected)?.name || ""
              )}
              </p>
              <img  
                className='w-2/4 h-2/4 mx-auto my-auto'
                src={selected === "passive"
                  ? `https://ddragon.leagueoflegends.com/cdn/15.1.1/img/passive/${passive.image.full}`
                  : `https://ddragon.leagueoflegends.com/cdn/15.1.1/img/spell/${data.find((spell) => spell.id === selected)?.id}.png`
                }
                alt="" 
              />
          </div>
        </div>
        <div>
          <h3 className="text-center text-white italic font-bold text-2xl uppercase mb-5">
            {selected === "passive"
              ? cleanDescription(passive.name)
              : cleanDescription(
                data.find((spell) => spell.id === selected)?.name || ""
            )}
          </h3>

          <p className='text-center text-white/60 uppercase MB-0 text-lg'>
            {spellLabels[spellIndex] || 'nADA'}
          </p>

          <p className="text-center text-white ">
            {selected === "passive"
              ? cleanDescription(passive.description)
              : cleanDescription(
                data.find((spell) => spell.id === selected)?.description || ""
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

Spells.propTypes = {
  data: PropTypes.array,
  passive: PropTypes.object,
};


export default Spells