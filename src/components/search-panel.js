import React from 'react';

import '../styles/search-panel.css';

const SearchPanel = ({onSearchData}) => {

    const onSearch = ({target}) => {
        onSearchData(target.value);
    }
        return <input 
        type="text" 
        placeholder='Type something here' 
        className='form-control'
        onChange={onSearch}/>
}

export default SearchPanel;