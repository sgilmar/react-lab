import './App.css'
import {TwitterFollowCard} from "./TwitterFollowCard.jsx";

export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName='armstudio_es' name='Sergio Gil' />
            <TwitterFollowCard isFollowing userName='midudev' name='Miguel Ángel Durán' />
            <TwitterFollowCard isFollowing={false} userName='elonmusk' name='Elon Musk' />
        </section>
    )
}