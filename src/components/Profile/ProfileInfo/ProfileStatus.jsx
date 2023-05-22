import React from 'react';
import pss from './ProfileStatus.module.css';
class ProfileStatus extends React.Component {



    state = {editMode: false,
        status: this.props.status,}

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (event) =>{
        this.setState({
          status: event.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status) {
this.setState({status: this.props.status})
        }
    }

    render() {

        return (
            <div className={pss.wrapper}>
            {!this.state.editMode &&
            <div className={pss.status}>
               <span onDoubleClick={this.activateEditMode}> {this.props.status || 'У вас еще нет статуса'} </span>
            </div>
            }
            {this.state.editMode &&
            <div className={pss.statusValue}>
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
            </div>
            }
        </div>
        )
    }
}


export default ProfileStatus;
