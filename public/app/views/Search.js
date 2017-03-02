import React, {Component} from 'react';

import AutoComplete from 'material-ui/AutoComplete';

import BackBar from '../components/BackBar';

const styles = {
    center_content: {
        paddingTop: '50px',
        paddingBottom: '50px',
    }
};

class Search extends Component {
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
            <BackBar />
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
