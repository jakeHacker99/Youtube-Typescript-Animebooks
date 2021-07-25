import { ApolloClient, InMemoryCache } from '@apollo/client'
import React from 'react'


export const apolloClient = new ApolloClient({
    uri: "https://anilist.co/graphiql",
    cache: new InMemoryCache()
})
