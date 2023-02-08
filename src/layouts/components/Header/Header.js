import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '~/config';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Navbar from '../Navbar';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faDollarSign, faCartShopping , faArrowDown19 ,faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import MenuPoper from '~/components/Popper/Menu/MenuPopper';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [];

function Header() {
    const currentUser = true;

    const userMenu = [
        {
            title: 'Đơn đặt chỗ của tôi',
            to: '/mybookings',
        },
        {
            title: 'Hộp thư',
            to: '/inbox',
        },
        {
            title: 'Tiền Agoda',
            to: '/agodacast',
        },
        {
            title: 'Thưởng hoàn tiền mặt',
            to: '/cashback',
        },
        {
            title: 'Agoda vip',
            to: '/agodavip',
        },
        {
            title: 'Danh sách yêu thích',
            to: '/saveproperties',
        },
        {
            title: 'Nhận xét của tôi',
            to: '/review',
        },
        {
            title: 'Point Max',
            to: '/pointmax',
        },
        {
            title: 'Hồ sơ của tôi',
            to: '/profile',
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Agoda" />
                </Link>
                <Navbar />
                <div className={cx('rent')}>
                    <Button outline>
                        <div className={cx('register-rent')}>Đăng ký cho thuê nhà</div>
                    </Button>
                </div>

                    {currentUser ? (
                    <>
                        <div>
                            <FontAwesomeIcon className={cx('language')} icon={faLanguage} />
                        </div>
                        <div>
                            <FontAwesomeIcon className={cx('dollar')} icon={faDollarSign} />
                        </div>
                        <div>
                            <FontAwesomeIcon className={cx('cart')} icon={faCartShopping} />
                        </div>
                    </>
                ) : (
                    <>
                        <Button text>Upload</Button>
                        <Button primary>Log in</Button>
                    </>
                )}
                <MenuPoper items={currentUser ? userMenu : MENU_ITEMS}>
                    {currentUser ? (
                        <div className={cx('profile')}>
                            <Image
                                className={cx('user-avatar')}
                                src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                                alt="Nguyen Van A"
                            />
                            <div className={cx('name')} >
                                Thang
                            </div>
                            <div className={cx('icon-agoda')} >
                            <img src={images.icon} alt="Agoda" />
                            </div>
                            <div className={cx('cash')} >
                                0 Đồng
                            </div>
                            <div className={cx('arrow-down')} >
                            <FontAwesomeIcon icon={faArrowDown19} />
                            </div>
                        </div>
                    ) : (
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )}
                </MenuPoper>
            </div>
        </header>
    );
}

export default Header;
