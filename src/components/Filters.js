import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

function Filters(props) {
  return (
    <section className=''>
      <form className='main__form'>
        <FilterMovie
          handleFilterMovie={props.handleFilterMovie}
          filterMovie={props.filterMovie}
        />
        <FilterYear
          handleFilterYear={props.handleFilterYear}
          year={props.year}
        />
      </form>
    </section>
  );
}
export default Filters; 
