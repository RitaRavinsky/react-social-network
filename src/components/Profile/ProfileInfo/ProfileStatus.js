import React from "react";
import { Form } from "react-bootstrap";
import styles from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activateEditMode = () => {
    this.setState({
      editMode: true,
      status: this.props.status,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  handleStatusChange = (e) => {
console.log(e.currentTarget.value);
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate (prevProps, prevState){
    if(prevProps.status !== this.props.status) {
      this.setState({
        status:this.props.status
      })
    }

  }

  render() {
    let { profile } = this.props;
    if (!profile.aboutMe) {
      profile = {
        aboutMe: "hi there",
        lookingForAJob: true,
        lookingForAJobDescription: "looking for job",
      };
    }
    return (
      <section className="profileStatus">
        <div className="statusWrap">
          {profile.aboutMe && profile.aboutMe}
          {!this.state.editMode && (
            <div
              className={styles.statusText}
              onDoubleClick={this.activateEditMode}
            >
              {this.props.status || "hi"}
            </div>
          )}
          {this.state.editMode && (
            <div className={styles.editStatus} onBlur={this.deactivateEditMode}>
              <Form>
                <Form.Control
                  value={this.props.status}
                  onChange={this.handleStatusChange}
                  autoFocus={true}
                />
              </Form>
            </div>
          )}
        </div>
        {profile.lookingForAJob && <i className="fa-solid fa-hand"></i>}
        <b>
          {profile.lookingForAJobDescription &&
            profile.lookingForAJobDescription}
        </b>
      </section>
    );
  }
}

export default ProfileStatus;
