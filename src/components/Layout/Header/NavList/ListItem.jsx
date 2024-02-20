import { HiChevronDown } from 'react-icons/hi'

function ListItem({ obj }) {
  return (
    <li className='list-item'>
      <a href='#' className='list-item-btn'>
        <span>{obj.content}</span>
        {obj.isParent && (
          <span className='list-item-icon'>
            <HiChevronDown />
          </span>
        )}
      </a>
    </li>
  )
}

export default ListItem
