import { useState, useEffect } from 'react';

interface WindowDimensions {
    width: number;
    height: number;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    isDesktopLarge: boolean;
}

const getWindowDimensions = (): WindowDimensions => {
    return {
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 768,
        isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
        isDesktop: window.innerWidth >= 1024,
        isDesktopLarge: window.innerWidth >= 1440
    };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const debounce = (func: (...args: any[]) => void, wait: number) => {
    let timeout: ReturnType<typeof setTimeout>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function executedFunction(...args: any[]) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args);
        }, wait);
    };
};

const useWindowDimensions = (): WindowDimensions => {
    const [dimensions, setDimensions] = useState<WindowDimensions>(
        getWindowDimensions()
    );

    useEffect(() => {
        const handleResize = debounce(() => {
            setDimensions(getWindowDimensions());
        }, 100);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return dimensions;
};

export default useWindowDimensions;
