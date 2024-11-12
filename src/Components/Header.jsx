import ThemeSwitcher from "./ThemeSwitcher";

function Header () {
    return (
        <header className="h-14 border-b-2 border-black dark:bg-dark-text">
            <ThemeSwitcher />
        </header>
    )
}

export default Header;