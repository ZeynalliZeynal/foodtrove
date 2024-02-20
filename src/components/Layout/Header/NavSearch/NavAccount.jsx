import { navAccountData } from '../../../../data/NavAccountData'

function NavAccount() {
  return (
    <ul className='account'>
      {navAccountData.map((item, i) => (
        <AccountItem item={item} key={i} />
      ))}
    </ul>
  )
}

export default NavAccount

function AccountItem({ item }) {
  return (
    <li className='account-item'>
      <a href='#'>
        <span className='account-icon'>{item.icon}</span>
        <span>{item.text}</span>
      </a>
    </li>
  )
}
