import { BiSearchAlt2 } from 'react-icons/bi'

function NavForm() {
  return (
    <form action='#' className='w-100'>
      <div className='input'>
        <input type='search' placeholder='Search For Items...' />
      </div>
      <div className='actions'>
        <div className='categories'>
          <select>
            <option value='all'>All Categories</option>
          </select>
        </div>
        <button className='search-btn'>
          <span className='search-icon'>
            <BiSearchAlt2 />
          </span>
        </button>
      </div>
    </form>
  )
}

export default NavForm
