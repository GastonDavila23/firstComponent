import { useState } from 'react'
import './TwitterFollowCard.css'

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    console.log('[TwitterFollowCard] render with userName: ', userName)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt='El avatar de midudev'
                    src={`https://unavatar.io/${userName}`}
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}

// export function TwitterFollowCard({/* formatUserName, */ children, userName, /* isFollowing} ya no se usa, ahora usamos el estado*/ initialIsFollowing  /* lo usamos para iniciar ya con un estado, y que no arranque en false */ }) {
//     // nos devuelve un array con 2 posiciones,
//     // en la primera posicion está el valor del estado
//     // en la segunda posición una función para actualizar el estado
//     /* const state = useState(false)
//     const isFollowing = state[0]
//     const setIsFollowing = state[1] */

//     // el equivalente a las 3 lineas de arriba
//     const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

//     //manejamos el estado con el click
//     const handleClick = () => {
//         setIsFollowing(!isFollowing)
//     }
//     //creamos un ternario para tener 2 opciones de texto según el estado
//     const text = isFollowing ? 'Siguiendo' : 'Seguir'
//     // creamos un ternario para aplicar estilos según su estado
//     const buttonClass = isFollowing
//         ? 'tw-followCard-button is-following'
//         : 'tw-followCard-button'
//     return (
//         <article className='tw-followCard'>
//             <header className='tw-followCard-header'>
//                 <img
//                     className='tw-followCard-avatar'
//                     alt={`El avatar de ${userName}`}
//                     src={`https://unavatar.io/${userName}`} />
//                 <div className='tw-followCard-info'>
//                     <strong>{children}</strong>
//                     {/* usamos formatUserName como parámetro, que es una función creada en App.jsx */}
//                     <span className='tw-followCard-userName'>{userName = { userName }}</span>
//                 </div>
//             </header>
//             <aside>
//                 {/* <button className='tw-followCard-button' > */}
//                 {/* <button className={buttonClass} >  aplicamos el ternario */}
//                 <button className={buttonClass} onClick={handleClick}>
//                     {/* Seguir  */} {/* children element */}
//                     {text}
//                 </button>
//             </aside>
//         </article>
//     )

// }

