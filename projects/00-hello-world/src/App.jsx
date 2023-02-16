import './App.css'
import {TwitterFollowCard} from "./TwitterFollowCard.jsx";

export function App() {
    const format = (userName) => `@${userName}`
    return (
        <section className='App'>
            <TwitterFollowCard formatUserName={format}
                               isFollowing
                               userName='armstudio_es'
                               name='Sergio Gil'/>
            <TwitterFollowCard formatUserName={format}
                               isFollowing
                               userName='midudev'
                               name='Miguel Ángel Durán'/>
            <TwitterFollowCard formatUserName={format}
                               isFollowing={false}
                               userName='elonmusk'
                               name='Elon Musk'/>
        </section>
    )
}