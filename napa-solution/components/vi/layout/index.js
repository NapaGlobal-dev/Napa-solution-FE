import Header from './header';
import Footer from './footer';
import styles from './index.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles.root}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;