import { useEffect, useState } from "react";
import "./MySelect.scss";

const MySelect = ({options, value, onChange}) => {

    const [showOptionList, setShowOptionList] = useState(false);
    const [defaultValue, setDefaultValue] = useState("Sort by");

    useEffect(() => {
        document.addEventListener("click", handleClickOutside)

        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, []);

    const handleOptionClick = e => {
        setDefaultValue(e.target.getAttribute("data-name"))
        setShowOptionList(false)
    };

    const handleListDisplay = () => {
        setShowOptionList(prevState => !prevState.showOptionList)
    }

    const handleClickOutside = e => {
        if (
          !e.target.classList.contains("select__option") &&
          !e.target.classList.contains("selected__text")
        ) {
          setShowOptionList(false)
        }
    };

    return (
        <div className="select__container">
            <div
                className={showOptionList ? "selected__text active" : "selected__text"}
                onClick={handleListDisplay}
            >
                    {defaultValue}
            </div>
            {showOptionList && (
                <ul className="select__options">
                    {options.map(option => {
                        return (
                            <li
                                className="select__option"
                                data-name={option.name}
                                key={option.value}
                                onClick={handleOptionClick}
                            >
                                {option.name}
                            </li>
                        );
                    })}
                </ul>
            )}
      </div>
    )
}

export default MySelect;