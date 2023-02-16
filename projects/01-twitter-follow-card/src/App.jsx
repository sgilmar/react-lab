import './App.css'
import {TwitterFollowCard} from "./TwitterFollowCard.jsx";

export function App() {

    const users = [
        {
            username: 'armstudio_es',
            name: 'Sergio Gil',
            isFollowing: true
        },
        {
            username: 'midudev',
            name: 'Miguel Ángel Durán',
            isFollowing: true
        },
        {
            username: 'elonmusk',
            name: 'Elon Musk',
            isFollowing: false
        },
        {
            username: 'TMChein',
            name: 'Tomas',
            isFollowing: true
        }
    ]

    return (
        <section className='App'>
            {
                users.map(({username, name, isFollowing}) => (
                    <TwitterFollowCard
                        key={username}
                        userName={username}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}