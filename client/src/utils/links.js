import { CgTimer, CgSearch, CgAdd, CgProfile } from 'react-icons/cg'

const links = [
  { id: 1, text: 'status', path: '/', icon: <CgTimer /> },
  { id: 2, text: 'all jobs', path: 'all-jobs', icon: <CgSearch /> },
  { id: 3, text: 'add job', path: 'add-job', icon: <CgAdd /> },
  { id: 4, text: 'profile', path: 'profile', icon: <CgProfile /> },
]

export default links
