import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss'; // Import the CSS module
import classNames from 'classnames';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx(styles.wrapper)}>
      <Header />
      <div className={cx(styles.container)}>
        <Sidebar />
        <div className={cx(styles.content)}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
