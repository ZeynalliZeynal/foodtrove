import Logo from '../../../../assets/img/loga.png'
import NavAccount from './NavAccount'
import NavForm from './NavForm'

import './NavSearch.scss'

function NavSearch() {
  return (
    <nav id='nav-search'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-2'>
            <a href='#' className='logo'>
              <img src={Logo} alt='Food Trove' />
            </a>
          </div>
          <div className='col-md-6 h-100'>
            <NavForm />
          </div>
          <div className='col-md-4'>
            <NavAccount />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavSearch
