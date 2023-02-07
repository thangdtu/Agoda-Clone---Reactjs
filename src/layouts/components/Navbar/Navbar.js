import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import { AparmentIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Máy bay + K.sạn" to={config.routes.hotelplane} />
                <MenuItem title="Chỗ ở" to={config.routes.seat} />
                <MenuItem title="Chuyến bay" to={config.routes.flight} />
                <MenuItem title="Phiếu giảm giá và ưu đãi" to={config.routes.discount} />
                <MenuItem title="Căn hộ" to={config.routes.apartment} icon={<AparmentIcon />} />
                <MenuItem title="Hoạt động" to={config.routes.activate} />
            </Menu>
        </aside>
    );
}

export default Navbar;
