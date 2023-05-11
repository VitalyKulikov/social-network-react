import React from 'react';
import pss from './ProfileStatus.module.css';
class ProfileStatus extends React.Component {

    state = {editMode: false}
    activateEditMode () {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode () {
        this.setState({
            editMode: false
        })
    }

    render() {

        return (
            <div className={pss.wrapper}>
            {!this.state.editMode &&
            <div className={pss.status}>
               <span onDoubleClick={this.activateEditMode.bind(this)}> {this.props.profile.aboutMe} </span>
            </div>
            }
            {this.state.editMode &&
            <div className={pss.statusValue}>
                <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.profile.aboutMe} />
            </div>
            }
        </div>
        )
    }
}


export default ProfileStatus;
