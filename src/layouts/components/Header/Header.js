import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Navbar from '../Navbar';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    const userMenu = [
        {
            title: 'Taxi sân bay',
            to: '/Taxi',
        },
        {
            title: 'Thuê xe',
            to: '/carrental',
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Agoda" />
                </Link>

                <Navbar />

                <div className={cx('inner-right')}>
                    <div className={cx('actions')}>
                        <Menu items={userMenu}>
                            <div className={cx('action-btn')}>...</div>
                        </Menu>
                    </div>
                    <div className={cx('rent')}>
                        <Button outline>
                            <div className={cx('register-rent')}>Đăng ký cho thuê nhà</div>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
