// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccount.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div className={cx('preview')} tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };
  return (
    <div>
      <Tippy interactive delay={[800, 0]} offset={[-10, 0]} placement="bottom" render={renderPreview}>
        <div className={cx('account-item')}>
          <img
            className={cx('avatar')}
            src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/11c677a7e9e3c4e31aadce3942d15088~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=6fbe8f18&x-expires=1748754000&x-signature=bQYsG4PEOPOfMSwsfB4Xeolvzqw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
            alt=""
          />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>baokunneee</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>BaoKunne</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}
AccountItem.propTypes = {};
export default AccountItem;
