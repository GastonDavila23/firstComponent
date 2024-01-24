import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'midudev',
        name: 'Juancarlos Durán',
        isFollowing: true,
    },
    {
        userName: 'gastondavila_',
        name: 'Gastón Dávila',
        isFollowing: false,
    },
    {
        userName: 'leo_messi',
        name: 'Leo Messi',
        isFollowing: true,
    },
    {
        userName: 'javiermilei',
        name: 'Javier Mile',
        isFollowing: false,
    }
]
export function App() {
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}
/* export function App() {
    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            userName={userName}
                            isFollowing={initialIsFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
} */