// import data from '../path/data'
import css from './Statistics.module.css'; 
import PropTypes from 'prop-types';
import { getColorRandom } from 'colorUtils/getColorRandom';

const Statistics = ({data}) => {
  
    return (<section className={css.statistics}>
    <h2 className={css.title}>Upload stats</h2>
  
  <ul className={`${css.stat_list}`}>
      { data.map(({id, label, percentage}) => (
            <li className={css.item} key={id} style={{backgroundColor: `${getColorRandom()}`}}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
            </li>
      ))
     }
    </ul>
  </section>)
}
Statistics.propTypes = {
  data: PropTypes.arrayOf(
     PropTypes.exact({
    id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  }))
  

}
export default Statistics;
