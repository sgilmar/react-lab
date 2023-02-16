import './App.css'
import {TwitterFollowCard} from "./TwitterFollowCard.jsx";

export function App() {
    const sgilmar = {isFollowing: true, userName: 'armstudio_es'}
    return (
        <section className='App'>
            <TwitterFollowCard { ...sgilmar}>
                Sergio Gil
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing
                               userName='midudev'>
                Miguel Ángel Durán
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={false}
                               userName='elonmusk'>
                Elon Musk
            </TwitterFollowCard>
        </section>
    )
}