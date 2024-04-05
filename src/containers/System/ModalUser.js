import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../../styles/ModalUser.scss'
import { emitter } from '../../utils/emitter';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            Password: '',
            FirstName: '',
            LastName: '',
            Address: '',
        }
        this.listenToEmitter()
    }
    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', data => {
            this.setState = {
                Email: '',
                Password: '',
                FirstName: '',
                LastName: '',
                Address: '',
            }
        })
    }
    componentDidMount() {


    }

    toggle = () => {
        this.props.toggleUserModal()
    }
    validateData = () => {
        const arr = ["Email", "Password", "FirstName", "LastName", "Address"]
        for (let i = 0; i < arr.length; i++) {
            if (!this.state[arr[i]]) {
                alert("Please enter " + arr[i])
                return false;

            }

        }
        return true;
    }
    handleAddNewUser = () => {
        if (this.validateData()) {
            this.props.createNewUser(this.state)
        }
    }
    handleInputChange = (event) => {

        const name = event.target.name;
        const arr = ["Email", "Password", "FirstName", "LastName", "Address"]
        for (let i = 0; i < arr.length; i++) {
            if (name == arr[i]) {
                let copyState = { ...this.state }

                copyState[arr[i]] = event.target.value
                this.setState({
                    ...copyState
                })

                break;
            }
        }
    }
    render() {
        return (

            <Modal isOpen={this.props.OpenCloseModal} toggle={() => { this.toggle() }} >
                <ModalHeader toggle={() => { this.toggle() }} >Add a new user</ModalHeader>
                <ModalBody  >
                    <div className='container'>
                        <form style={{ border: "none" }}>
                            <div className='row'>
                                <div className='col-6 form-group'>
                                    <label>Email</label>
                                    <input className='form-control' name="Email" type="email" onChange={(event) => this.handleInputChange(event)}
                                        value={this.state.Email}
                                    ></input>
                                </div>
                                <div className='col-6 form-group'>
                                    <label>Password</label>
                                    <input name="Password" type="password" onChange={(event) => this.handleInputChange(event)}
                                        value={this.state.Password}
                                    ></input>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6 form-group'>
                                    <label>First Name</label>
                                    <input name="FirstName" type="text" onChange={(event) => this.handleInputChange(event)}
                                        value={this.state.FirstName}
                                    ></input>
                                </div>
                                <div className='col-6 form-group'>
                                    <label>Last Name</label>
                                    <input name="LastName" type="text" onChange={(event) => this.handleInputChange(event)}
                                        value={this.state.LastName}
                                    ></input>
                                </div>
                            </div>
                            <div className='col-12 form-group'>
                                <label>Address</label>
                                <input name="Address" type="text" onChange={(event) => this.handleInputChange(event)}
                                    value={this.state.Address}
                                ></input>
                            </div>
                            <Button type='submit' color="primary" onClick={() => this.handleAddNewUser()} >Add new</Button>{' '}
                            <Button color="secondary" onClick={() => this.toggle()}>Close</Button>
                        </form>

                    </div>
                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </Modal>

        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
