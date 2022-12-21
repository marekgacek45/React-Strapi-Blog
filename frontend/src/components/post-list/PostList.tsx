import styles from './PostList.module.scss'
import PostCard from '../post-card/PostCard'
import { useState } from 'react'

interface Post {
	id: string
	attributes: any
	title: string
	content: string
	publishedAt: string
	image:string
	categories:string
	category:string
	handleView:any
}

const PostList = (props) => {
	const [view,setView] = useState(false)

const handleView = () => {
	setView(current=>!current)
}

	const { loading, error, data } = props.query() //to props

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

// console.log(data)
    
	// const postAmount = (data.posts.data.map(post=>post.id)).length //to props

	
	return (

		<div className={styles['list__box']}>
            <div className={styles['list__header']}>
            <h3>Wszystkie posty</h3>
            <p>{props.postAmount}</p>
			<button onClick={handleView}>change</button>
            </div>
            <div className={styles['list__items']}>
			{props.allPosts.map((post: Post) => ( //to
				<PostCard
					key={post.id}
					id={post.id}
					title={post.attributes.title}
					content={post.attributes.content}
					publishedAt={post.attributes.publishedAt}
					image={post.attributes.image.data.attributes.url}
					categories={post.attributes.categories.data.map((category:Post)=>category.attributes.name)}
					handleView={view}
					
				/>
			))}
            </div>
		</div>
	)
}

export default PostList
