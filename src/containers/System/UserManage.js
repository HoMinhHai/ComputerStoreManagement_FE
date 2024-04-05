import React, { Component, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import '../../styles/UserManage.scss'
import { getAllUsers, createNewUser, deleteUser } from '../../services/userService';
import Modal from './ModalUser'
import { emitter } from '../../utils/emitter';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listUser: [],
            OpenCloseModal: false,
        }
    }

    async componentDidMount() {
        await this.getAllUsers()
    }
    getAllUsers = async () => {
        let res = await getAllUsers('ALL');
        if (res && res.errCode === 0)
            this.setState({
                listUser: res.list
            })
    }
    handleAddNewUser = () => {
        this.setState({
            OpenCloseModal: true
        })
    }
    createNewUser = async (data) => {
        try {
            await createNewUser(data);
            this.getAllUsers();
            this.toggleUserModal();
            emitter.emit('EVENT_CLEAR_MODAL_DATA', { 'id': 'your id' })
        }
        catch (e) {
            alert("Email already exists")
        }
    }
    toggleUserModal = () => {
        this.setState({
            OpenCloseModal: !this.state.OpenCloseModal
        })
    }
    handleDeleteUser = async (id) => {
        let res = await deleteUser(id);
        if (res && res.errCode === 0) {
            alert("Deleted succesfully");
            await this.getAllUsers();

        }
        else
            alert("Can not delete this user");

    }
    render() {
        let listUser = this.state.listUser;
        return (
            <Fragment>
                <Modal OpenCloseModal={this.state.OpenCloseModal}
                    toggleUserModal={this.toggleUserModal}
                    size="lg"
                    createNewUser={this.createNewUser} />

                <div className='container-user-manage'>
                    <div className='text-center'>User Manage</div>
                    <button className='btn-new'
                        onClick={() => this.handleAddNewUser()}>Create a new user
                    </button>

                    <table id="customers">
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUser && listUser.map((item, index) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{item.Email}</td>
                                            <td>{item.FirstName}</td>
                                            <td>{item.LastName}</td>
                                            <td>{item.Address}</td>

                                            <td>
                                                <button className='btn-edit'><i className="fas fa-pencil-alt"></i></button>
                                                <button className='btn-delete'
                                                    onClick={() => this.handleDeleteUser(item.id)}>
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>
                                            </td>
                                        </tr>

                                    </>
                                )
                            })}
                        </tbody>

                    </table>
                </div>
            </Fragment>



        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
