import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";


const BookList = () => {
    const { isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark; 
    return (
          <div className='book-list' style={{color: theme.syntax, background: theme.bg}}>
                <ul>
                    <li style={{ background: theme.ui}}>The way of the wolf</li>
                    <li style={{ background: theme.ui}}>Harmlet</li>
                    <li style={{ background: theme.ui}}>Pride and Prejudice</li>
                </ul>
            </div>
        
    )
}

export default BookList; 