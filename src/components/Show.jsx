import PropTypes from "prop-types";

const Show = ({ data }) => {
  return (
    <>
      <h1>dta</h1>
      <h2>dasdsada</h2>
      <h3>{data}</h3>
    </>
  );
};

Show.propTypes = {
  data: PropTypes.object,
};

export default Show;
