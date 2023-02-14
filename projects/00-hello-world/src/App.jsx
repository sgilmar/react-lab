import './App.css'

export function App() {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="El avatar de sgilmar"
                    src="https://avatars.githubusercontent.com/u/15620043?v=4"
                />
                <div className='tw-followCard-info'>
                    <strong>Sgilmar</strong>
                    <span className='tw-followCard-infoUsername'>@armstudio_es</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}