import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';
import '../styles/Filters.scss';

function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  
  return (
    <section className=''>
      <form className='form' onSubmit={handleSubmit}>
        <FilterMovie
          handleFilterMovie={props.handleFilterMovie}
          filterMovie={props.filterMovie}
        />
        <FilterYear
          handleFilterYear={props.handleFilterYear}
          years={props.years}
        />
      </form>
    </section>
  );
}

export default Filters; 
