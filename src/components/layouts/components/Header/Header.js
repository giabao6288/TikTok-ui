import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faKeyboard,
  faEarthAsia,
  faEllipsisVertical,
  faUser,
  faGear,
  faCoins,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import config from '~/config';
import Search from '~/components/layouts/components/Search';
import Button from '~/components/Button';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { ActivityIcons, MessageIcons, UploadIcons } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const currentUser = true;

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
    to: '',
  },
];

function Header() {
  const handleMenuChange = (MenuItem) => {
    switch (MenuItem.type) {
      case 'language':
        break;
      default:
    }
  };
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@hoaa',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get Coins',
      to: '/Coins',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/Setting',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/Logout',
      separate: true,
    },
  ];
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo-link')}>
          <img src={images.logo} alt="TikTok" />
        </Link>
        <Search />
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="Upload Video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcons />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcons />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Activity" placement="bottom">
                <button className={cx('action-btn')}>
                  <ActivityIcons />
                  <span className={cx('badge')}>12 </span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/500153699_1250986409925296_2795441677460735840_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGjphuq7CgabUuKG1DoaqYFnm50g1GjiVCebnSDUaOJUCtU7hLeIaEZHCP-a37NDFCjQs103XJSFE6e2aBjjHa6&_nc_ohc=asat_2lBhxEQ7kNvwE3mkMS&_nc_oc=AdkIU8BC6xyJBahN5FhWwNqOzno8y4ImQRBr9b7kxRzDd7eUWaO0794iuGR5w0SidC0&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=k_oI5AlmG-LqI_wmuM5iPw&oh=00_AfK6hsJVobn435c8ytkeSEf0JRtSZYu3Fg3lxass1mRfIg&oe=6839DC59"
                className={cx('user-avatar')}
                alt="Nguyen Van A"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}
export default Header;
