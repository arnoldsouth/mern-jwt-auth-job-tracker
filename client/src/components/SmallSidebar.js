import Wrapper from '../assets/wrappers/SmallSidebar'
import { CgClose } from 'react-icons/cg'
import Logo from './Logo'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSidebar } from '../features/user/userSlice'
import NavLinks from './NavLinks'
const SmallSidebar = () => {
    const { isSidebarOpen } = useSelector((store) => store.user)
    const dispatch = useDispatch()

    const toggle = () => {
        dispatch(toggleSidebar())
    }
    return (
        <Wrapper>
            <div
                className={
                    isSidebarOpen
                        ? 'sidebar-container show-sidebar'
                        : 'sidebar-container'
                }
            >
                <div className="content">
                    <button className="close-btn" onClick={toggle}>
                        <CgClose />
                    </button>
                    <header>
                        <Logo />
                    </header>
                    <NavLinks toggleSidebar={toggle} />
                </div>
            </div>
        </Wrapper>
    )
}
export default SmallSidebar
