import PropTypes from "prop-types";

const ImageSpells = ({img, text, isSelected, onClick}) => {
  return (
    <li
    onClick={onClick}
    className={`flex flex-col items-center justify-start w-[132px] hover:cursor-pointer
    hover:scale-110 hover:transition hover:duration-200 opacity-50 ${
      isSelected ? 'opacity-100' : ''
    }`}>
      <img src={img} alt={text} className="w-16 h-16 object-contain" />
      <p className="mt-4 text-center text-white font-lol font-medium text-sm break-words uppercase whitespace-normal ">
        {text}
      </p>
    </li>
  )
}

ImageSpells.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ImageSpells
