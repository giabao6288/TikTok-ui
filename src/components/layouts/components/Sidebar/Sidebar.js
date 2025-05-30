import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import {
  HomeIcons,
  HomeActiveIcons,
  UserGroupIcons,
  UserGroupActiveIcons,
  LiveIcons,
  LiveActiveIcons,
} from '~/components/Icons';
import config from '~/config';
import SuggestedAccounts from '~/components/SuggestAccounts/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For You" to={config.routes.home} icon={<HomeIcons />} activeIcon={<HomeActiveIcons />} />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcons />}
          activeIcon={<UserGroupActiveIcons />}
        />
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcons />} activeIcon={<LiveActiveIcons />} />
      </Menu>
      <SuggestedAccounts label="Suggested accounts" />
      <SuggestedAccounts label="Following accounts" />
    </aside>
  );
}
export default Sidebar;
