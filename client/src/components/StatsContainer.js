import StatItem from './StatItem'
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa'
import Wrapper from '../assets/wrappers/StatsContainer'
import { useSelector } from 'react-redux'

const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs)

  const defaultStats = [
    {
      title: 'pending applications',
      count: stats.pending || 0,
      // icon: <FaSuitcaseRolling />,
      // color: '#e9b949',
      // bcg: '#fcefc7',
      color: '#7275a0',
      // bcg: '#dbddff',
    },
    {
      title: 'interviews scheduled',
      count: stats.interview || 0,
      // icon: <FaCalendarCheck />,
      // color: '#647acb',
      // bcg: '#e0e8f9',
      color: '#7275a0',
      // bcg: '#dbddff',
    },
    {
      title: 'jobs declined',
      count: stats.declined || 0,
      // icon: <FaBug />,
      // color: '#d66a6a',
      // bcg: '#ffeeee',
      color: '#7275a0',
      // bcg: '#dbddff',
    },
  ]

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />
      })}
    </Wrapper>
  )
}
export default StatsContainer
