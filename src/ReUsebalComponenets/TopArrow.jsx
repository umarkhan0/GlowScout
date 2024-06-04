import NavigationIcon from '@mui/icons-material/Navigation';
import { useState, useEffect } from 'react';

export default function TopArrow() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {showScroll && (
                <div
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 flex justify-center items-center active:opacity-85 p-4 cursor-pointer rounded-full bg-[#f15a29]"
                >
                    <NavigationIcon fontSize='large' sx={{ color: "#fff" }} />
                </div>
            )}
        </>
    );
}
