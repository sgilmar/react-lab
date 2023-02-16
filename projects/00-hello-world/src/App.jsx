import './App.css'
import {TwitterFollowCard} from "./TwitterFollowCard.jsx";

export function App() {

    return (
        <section className='App'>
            <TwitterFollowCard userName='armstudio_es' initialIsFollowing>
                Sergio Gil
            </TwitterFollowCard>
            <TwitterFollowCard userName='midudev' initialIsFollowing>
                Miguel Ángel Durán
            </TwitterFollowCard>
            <TwitterFollowCard userName='elonmusk' initialIsFollowing={false}>
                Elon Musk
            </TwitterFollowCard>
        </section>
    )
}