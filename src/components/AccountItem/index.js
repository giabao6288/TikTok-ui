import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/31c2a4d28f36c7f9154927f0e4038fa5~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=5d171ed8&x-expires=1747886400&x-signature=zU%2FswJe7o1ZeRGThSUgwBBG6zyw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=b59d6b55&idc=my"
        alt="Hoa"
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>nguyenvana</span>
      </div>
    </div>
  );
}
export default AccountItem;
