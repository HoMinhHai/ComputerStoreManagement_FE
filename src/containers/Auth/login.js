import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import '../../../src/styles/Login.scss';
import { handleLogin } from '../../services/adminService'
import * as actions from "../../store/actions";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            showPassword: false,
            error: ""
        };
        this.myRef = React.createRef();
    }
    componentDidMount() {

        this.myRef.current.focus();
    }
    handleKeyPress = (event) => {
        if (event.key === 'Enter')
            this.checkLogin()
    }
    Visibility_Password = () => {
        this.setState({
            showPassword: !this.state.showPassword
        })

    };
    handleInputChange = (event) => {
        if (event.target.name === 'uname')
            this.setState({
                email: event.target.value
            })
        else
            this.setState({
                password: event.target.value
            })

    }
    checkLogin = async () => {
        this.setState({
            error: ""
        })
        try {
            let data = await handleLogin(this.state.email, this.state.password);


            this.props.userLoginSuccess(data.user)


        } catch (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    this.setState({
                        error: "Không được bỏ trống email và mật khẩu"
                    })
                }
                else if (error.response.status === 404) {
                    this.setState({
                        error: "Email không tồn tại"
                    })
                } else if (error.response.status === 401) {
                    this.setState({
                        error: "Mật khẩu không chính xác"
                    })
                } else {
                    console.log("Lỗi khác từ máy chủ:", error.response.status);
                }
            } else {

                console.log("Lỗi không xác định:", error.message);

            }
        }
    };

    render() {


        return (
            <div className='background_login'>
                <div className='parents col-4'>
                    <div className="container_login">
                        <div className='title'>ĐĂNG NHẬP HỆ THỐNG</div>
                        <input
                            onKeyPress={(event) => this.handleKeyPress(event)}
                            className='form-control'
                            ref={this.myRef}
                            onChange={(event) => this.handleInputChange(event)}
                            value={this.state.email} type="email" placeholder="Tên đăng nhập" name="uname" maxLength={200} required />


                        <div className="password-wrapper">
                            <input
                                type={this.state.showPassword ? 'text' : 'password'}
                                placeholder="Nhập mật khẩu"
                                name="psw"
                                onKeyPress={(event) => this.handleKeyPress(event)}
                                className='form-control'
                                required
                                value={this.state.password}
                                maxLength={200}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                            <span className='Hide' onClick={this.Visibility_Password}>
                                {this.state.showPassword ? 'Ẩn' : 'Hiện'}
                            </span>
                        </div>
                        <div className='error'>{this.state.error}</div>
                        <button onClick={this.checkLogin} type="submit">Đăng nhập</button>
                        <label>
                            <input type="checkbox" name="remember" /> Ghi nhớ mật khẩu
                        </label>
                    </div>

                    <div className="con">

                        <span className="psw" >
                            <a href="#" >Quên mật khẩu?</a>
                        </span>
                    </div>

                </div >
            </div>


        )
    }

}
//Map state of redux store to props of component
const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};
//Map actions to component props
const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
