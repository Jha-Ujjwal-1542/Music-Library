import React from 'react';
import Tracks from '../tracks/Tracks.js'
import Search from '../tracks/Search'

const Index = () => {
    return (
        <React.Fragment>
            <Search />
            <Tracks />
        </React.Fragment>
    )
}
export default Index;