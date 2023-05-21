const MapFilter = (props) => {
  const { filter, handleChangeFilter, icon } = props;

  return (
    <button onClick={() => handleChangeFilter(filter)}>
      <img src={icon} alt={filter} styles={{ height: "30px" }} />
    </button>
  );
};

export default MapFilter;
