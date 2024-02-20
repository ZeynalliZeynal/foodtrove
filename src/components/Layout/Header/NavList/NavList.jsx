import { HiBars3CenterLeft } from 'react-icons/hi2'
import { RiPhoneLine } from 'react-icons/ri'

import List from './List'
import './NavList.scss'

function NavList() {
  return (
    <nav id='nav-list'>
      <div className='container'>
        <div className='row h-100'>
          <div className='col-md-2'>
            <button className='sidebar-btn'>
              <span className='icon-frame'>
                <HiBars3CenterLeft />
              </span>
            </button>
          </div>
          <div className='col-md-6'>
            <List />
          </div>
          <div className='col-md-4 text-end'>
            <a href='#' className='contact'>
              <span className='contact-icon'>
                <RiPhoneLine />
              </span>
              <span>+123 ( 456 ) ( 7890 )</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavList
