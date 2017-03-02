import React, {Component} from 'react';

import AutoComplete from 'material-ui/AutoComplete';

import SearchBar from '../components/SearchBar';

const styles = {
    center_content: {
        paddingTop: '50px',
        paddingBottom: '50px',
    }
};

class Search extends Component  {
    state = {
        dataSource: [],
    };

    handleUpdateInput = (value) => {
        this.setState({
            dataSource: [
                value,
                value + value,
                value + value + value,
            ],
        });
    };

    render() {
        return (
            <div>
            <SearchBar />
            <div style={styles.center_content}>
            <AutoComplete
            hintText="Type anything"
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
            fullWidth={true}
            />
            </div>
            </div>
        );
    }
}
export default Search;
