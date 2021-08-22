import Navbar from './Navbar';

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main
                style={{
                    width: '100%',
                }}
            >
                {children}
            </main>
        </>
    );
}
