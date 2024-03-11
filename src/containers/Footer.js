import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Footer.scss'
import icon_momo from '../assets/images/momo.png'
import icon_post from '../assets/images/post.png'
import icon_ahamove from '../assets/images/ahamove.png'
import icon_ghn from '../assets/images/giaohangnhanh.png'
import icon_shoppe from '../assets/images/shoppe.png'
import icon_snappy from '../assets/images/snappy.png'
import icon_vnpay from '../assets/images/vnpay.png'
import icon_zalopay from '../assets/images/zalopay.png'
import icon_ninjavan from '../assets/images/icon_ninjavan.png'
class Footer extends Component {

    render() {


        return (
            <div className='container-footer'>
                <div className='content-right'>
                    <div className='content-1'>
                        <p className='title'>DỊCH VỤ</p>
                        <ul>
                            <li><a href='' className='detail'>Điều khoản sử dụng</a></li>
                            <li><a href='' className='detail'>Chính sách bảo mật thông tin cá nhân </a></li>
                            <li><a href='' className='detail'>Chính sách bảo mật thanh toán </a></li>
                            <li><a href='' className='detail'> Giới thiệu NPC Shop  </a></li>
                        </ul>
                    </div>
                    <div className='content-2'>
                        <p className='title'>HỖ TRỢ</p>
                        <ul>
                            <li><a href='' className='detail'> Chính sách đổi - trả - hoàn tiền  </a></li>
                            <li> <a href='' className='detail'> Chính sách bảo hành  </a></li>
                            <li><a href='' className='detail'>Chính sách vận chuyển</a></li>
                            <li><a href='' className='detail'> Chính sách khách sỉ </a></li>
                            <li> <a href='' className='detail'>  Phương thức thanh toán và xuất HĐ</a></li>
                        </ul>
                    </div>

                    <div className='content-3'>
                        <p className='title'> TÀI KHOẢN CỦA TÔI</p>
                        <ul>
                            <li><a href='' className='detail'>Đăng nhập/Tạo mới tài khoản</a></li>
                            <li> <a href='' className='detail'>Thay đổi địa chỉ khách hàng</a></li>
                            <li><a href='' className='detail'>Chi tiết tài khoản</a></li>
                            <li><a href='' className='detail'>Lịch sử mua hàng</a></li>
                        </ul>








                    </div>

                </div>
                <div className='group-icon'>
                    <div className='icon-top'>
                        <img id='icon-1' src={icon_post}></img>
                        <img id='icon-2' src={icon_ahamove}></img>
                        <img id='icon-3' src={icon_ghn}></img>
                        <img id='icon-4' src={icon_snappy}></img>
                        <img id='icon-5' src={icon_ninjavan}></img>
                    </div>
                    <div className='icon-bottom'>
                        <img id='icon-6' src={icon_vnpay}></img>
                        <img id='icon-7' src={icon_zalopay}></img>
                        <img id='icon-8' src={icon_momo}></img>
                        <img id='icon-9' src={icon_shoppe}></img>
                    </div>

                </div>
            </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
