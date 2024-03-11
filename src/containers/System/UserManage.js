import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import '../../styles/UserManage.scss'
import { getAllUsers, createNewUser } from '../../services/userService';
import Modal from './ModalUser'
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
    render() {
        let listUser = this.state.listUser;
        return (
            <>
                <Modal OpenCloseModal={this.state.OpenCloseModal}
                    toggleUserModal={this.toggleUserModal}
                    size="lg"
                    createNewUser={this.createNewUser}
                />
                <div className='container-user-manage'>
                    <div className='text-center'>User Manage</div>
                    <button className='btn-new'
                        onClick={() => this.handleAddNewUser()}>Create a new user</button>

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
                                                <button className='btn-delete'><i className="fas fa-trash-alt"></i></button>
                                            </td>
                                        </tr>

                                    </>
                                )
                            })}
                        </tbody>

                    </table>
                </div>
            </>



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
