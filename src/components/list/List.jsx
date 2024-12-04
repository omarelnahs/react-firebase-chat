import './List.css'
import ChatList from './ChatList/ChatList'
import UserInfo from './userInfo/UserInfo'

const List = () => {
  return (
    <div className='list'>
      <UserInfo />
      <ChatList />
    </div>
  )
}

export default List