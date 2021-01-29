import React from 'react';
import { connect } from 'react-redux';
import { addTask } from './../../redux/actions';
import './styles.scss';

import RenderTasks from './RenderTasks';

class MainApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: '' };
    }

    updateInput = input => {
        this.setState({ input })
    };

    handleAddTask = () => {
        this.props.addTask(this.state.input)
        this.setState({ input: '' })
    }

    render(){
        return (
            <div className="mainApp">
                <div className="appWrap">
                    <div className="addMoreWrap item">
                        <h1>Project List</h1>

                        <input 
                            type="text"
                            onChange={e => this.updateInput(e.target.value)}
                            value={this.state.input}         
                        />

                        <button onClick={this.handleAddTask}>
                            Add
                        </button>

                        <RenderTasks/>
                    </div>

                    <div className="itemTreeWrap item">
                        Hello2
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    { addTask })(MainApp);
