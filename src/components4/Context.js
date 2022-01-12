import React from 'react'

const UserContext = React.createContext({
    fname: 'Nirmit',
    setFname: () => {}
})

// const UserProvider = UserContext.Provider
// const UserConsumer = UserContext.Consumer

// export { UserProvider, UserConsumer }

export default UserContext