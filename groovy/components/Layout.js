import Navbar from './Navbar';

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <div className='groovy-main-container'>{children}</div>
        </>
    );
}
