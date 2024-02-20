import { navListData } from '../../../../data/NavListData'
import ListItem from './ListItem'

function List() {
  return (
    <ul className='list'>
      {navListData.map((item, i) => (
        <ListItem obj={item} key={i} />
      ))}
    </ul>
  )
}

export default List
