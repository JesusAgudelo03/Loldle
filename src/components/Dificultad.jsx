import PropTypes from "prop-types";
import { DiffHigh, DiffMed, DiffLow} from "../assets/icons/Difficulties"

const Dificultad = ({ level }) => {
  if (level === undefined || level === null) {
    return (
      <p className="text-white text-sm uppercase">
        Sin dificultad definida
      </p>
    );
  }

  let DifficultyComponent;
  if (level > 0 && level <= 3) {
    DifficultyComponent = <DiffLow />;
  } else if (level > 3 && level <= 7) {
    DifficultyComponent = <DiffMed />;
  } else {
    DifficultyComponent = <DiffHigh />;
  }

  return (
    <div className="flex items-center justify-center">
      <span className="font-bold text-sm uppercase text-[#c8aa6e] text-center">
        {DifficultyComponent}
      </span>
    </div>
  );
};

Dificultad.propTypes = {
  level: PropTypes.number, 
};

export default Dificultad;
