import React, {Component} from 'react';

import AutoComplete from 'material-ui/AutoComplete';

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
              <AutoComplete
                  placeholder="Type anything"
                  dataSource={this.state.dataSource}
                  onUpdateInput={this.handleUpdateInput}
                  fullWidth={true}
              />
            </div>
        );
    }
}
export default Search;
