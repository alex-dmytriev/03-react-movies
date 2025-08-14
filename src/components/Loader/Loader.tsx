import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.text}>
      <p>Loading, please wait...</p>
    </div>
  );
};

export default Loader;
