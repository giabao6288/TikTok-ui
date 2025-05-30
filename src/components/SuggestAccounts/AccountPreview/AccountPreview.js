import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <img
          className={cx('avatar')}
          src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/11c677a7e9e3c4e31aadce3942d15088~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=6fbe8f18&x-expires=1748754000&x-signature=bQYsG4PEOPOfMSwsfB4Xeolvzqw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
          alt=""
        />
        <Button className={cx('follow-btn')} primary>
          Follow
        </Button>
      </header>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>baokunneee</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>BaoKunne</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('label')}>Followers</span>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('label')}>Likes</span>
        </p>
      </div>
    </div>
  );
}
export default AccountPreview;
