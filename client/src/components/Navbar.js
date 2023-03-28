import Wrapper from '../assets/wrappers/Navbar'
import { CgMenu, CgProfile, CgChevronDown } from 'react-icons/cg'
import Logo from './Logo'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar, clearStore } from '../features/user/userSlice'

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false)
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const toggle = () => {
    dispatch(toggleSidebar())
  }

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggle}>
          <CgMenu />
        </button>
        <div>
          {/* <Logo /> */}
          {/* <h1>jobTRACKER</h1> */}
          <h3 className="logo-text">Dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <CgProfile />
            {user?.name}
            <CgChevronDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => dispatch(clearStore('Logging out...'))}
            >
              <div className="bebas-neue">Logout</div>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Navbar
