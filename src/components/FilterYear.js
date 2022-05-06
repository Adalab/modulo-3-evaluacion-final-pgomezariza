function FilterYear(props) {
  const handleYearSearch = (ev) => {
    props.handleFilterYear(ev.target.value);
  };
  const renderYears = () => {
    return props.years.map((year, index) => {
      return (
        <option key={index} value={year}>
          {year}
        </option>
      );
    });
  };
  return (
    <>
      <div className="main__form--year">
        <label className="main__form--movieLabelYear" htmlFor="movieSearchYear">
          Year
        </label>
        <select
          className="main__form--movieInputYear"
          name="movieSearchYear"
          id="year"
          onChange={handleYearSearch}
        >
          <option className="main__form--movieOptYear" value="">
            All
          </option>
          {renderYears()}
        </select>
      </div>
    </>
  );
}
export default FilterYear;