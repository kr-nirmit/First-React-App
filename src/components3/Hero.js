import React from 'react'

function Hero({heroName}) {
    if(heroName == 'Batman'){
        throw new Error('Not  Hero!...')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default Hero
