import Navbar from './Navbar';

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main
                style={{
                    width: '100%',
                    padding: 30,
                }}
            >
                {children}
            </main>
        </>
    );
}
