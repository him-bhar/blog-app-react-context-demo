import {useContext} from "react";
import ThemeContext from "../context/ThemeContext.jsx";

const ContentComponent = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div>
            Current Theme: {theme}
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default ContentComponent;