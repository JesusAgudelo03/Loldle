import PropTypes from "prop-types";
import FighterRole from "./Roles/FighterRole";
import AssassinRole from "./Roles/AssassinRole";
import MageRole from "./Roles/MageRole";
import TankRole from "./Roles/TankRole";
import SupportRole from "./Roles/SupportRole";
import MarksmanRole from "./Roles/MarksmanRole";

const Roles = ({ tags }) => {
  if (!tags || tags.length === 0) {
    console.log(tags, "tags en roles")
    return (
      <p className="text-white text-sm uppercase">Desconocido</p>
    );
  }

  return (
    <div className="flex items-center justify-center gap-4 mb-2 ">
      {tags.map((tag, index) => (
          <span key={index} className="text-[#c8aa6e] font-bold text-sm uppercase">
          {tag === "Fighter" ? (
            <FighterRole />
          ) : tag === "Mage" ? (
            <MageRole />
          ) : tag === "Assassin" ? (
            <AssassinRole />
          ): tag === "Tank" ? (
            <TankRole />
          ) :tag === "Marksman" ? (
            <MarksmanRole />
          ) :tag === "Support" ? (
            <SupportRole />
          ) : (
            <p>{tag}</p>
          )}
        </span>
      ))}
    </div>
  );
};

Roles.propTypes = {
  tags: PropTypes.array,
};

export default Roles;
