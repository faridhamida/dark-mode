import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useDarkMode = (key, initialValues) => {

        const [darkMode, setDarkMode] = useLocalStorage(key,initialValues)

        useEffect(() => {
            const body = document.querySelector('body')
            darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
        }, [darkMode])
        return [darkMode, setDarkMode]
    }

export default useDarkMode;