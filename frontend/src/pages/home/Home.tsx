import styles from './Home.module.scss'
import PostList from '../../components/post-list/PostList'
import Wrapper from '../../components/UI/wrapper/Wrapper'



const Home = () => {
	
	return <Wrapper className={styles.container}>
		<PostList/>
    </Wrapper>
}

export default Home
