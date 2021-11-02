const Program = ({ time, title, type, duration, image, isUnseen, direct }) => {
  return (
    <div className="program">
      <div className="heure">
        <span>{time}</span>
      </div>

      <div className="picture">
        <img src={image} alt="" />
      </div>

      <div className="description">
        <p>{title}</p>
        <p>{type}</p>
        <span>{duration}</span>
        {direct && <span>. Direct</span>}
        {isUnseen && <span>. Inédit</span>}
      </div>
    </div>
  );
};

export default Program;
