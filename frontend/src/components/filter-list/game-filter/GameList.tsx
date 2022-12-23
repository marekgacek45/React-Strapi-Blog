import { useGames } from '../../../hooks/useGames'
import FilterListItems from '../FilterList'
import Card from '../../UI/card/Card'
import styles from './GameList.module.scss'
import { Link } from 'react-router-dom'

const GameList = () => {
	const { loading, error, data } = useGames()

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

	const allItems = data.games.data
	const title = 'Gry:'
	const direction = 'game'

	return (
		<FilterListItems title={title} allItems={allItems} direction={direction} />
		// <Card className={styles['game-list__container']}>
		// 	<h2 className={styles['game-list__header']}>Lista Gier:</h2>
		// 	<ul className={styles['game-list__list']} >
		// 		{allItems.map(game => (
		// 			<Link to={`/game/${game.id}`} className={styles['game-list__link']}>
		// 				<FilterListItems
		// 					imgUrl={game.attributes.image.data.map(game => game.attributes.url)}
		// 					title={game.attributes.title}
		// 				/>
		// 			</Link>
		// 		))}
		// 	</ul>
		// </Card>
	)
}
export default GameList
