
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import './PageProfile.css';

const PageProfile = (props) => {
  return (
    <div className='page-profile'>
      <Header theme='light'/>
      <main>
        <Profile {...props}/>
      </main>
    </div>
  )
}

export default PageProfile;
