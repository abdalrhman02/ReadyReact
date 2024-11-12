import { useEffect, useRef, useState } from "react";


function ThemeSwitcher() {
    const [switchValue, setSwitchValue] = useState('light');
    const sunMoonIcon = useRef();

    const switchToggle = () => {
        setSwitchValue((prevValue) => (prevValue === 'light' ? 'dark' : 'light'));
    } 

    useEffect(() => {
        if (switchValue === 'light') {
          document.documentElement.classList.add('light');
          document.documentElement.classList.remove('dark');
        } else {
          document.documentElement.classList.remove('light');
          document.documentElement.classList.add('dark');
        }
      }, [switchValue]);
    
    return (
        <div className="relative w-16 h-7 rounded-xl border-2 border-black bg-backgroundColor"
            onClick={switchToggle}>
            <i className={`fa-regular ${switchValue === 'dark' ? 'fa-moon' : 'fa-sun'} px-1`} ref={sunMoonIcon}></i>
        </div>
    )
}

export default ThemeSwitcher;