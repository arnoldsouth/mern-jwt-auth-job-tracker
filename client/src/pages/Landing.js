import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
      <nav>{/* <Logo /> */}</nav>
      <nav>
        <h1>jobTRACKER</h1>
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h2>Job Status Tracking App</h2>
          <p>
            A simplified job status tracker for individuals to easily manage and
            update as they progress through their job hunt.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        {/* <img src={main} alt="job hunt" className="img main-img" /> */}
      </div>
    </Wrapper>
  )
}

export default Landing
