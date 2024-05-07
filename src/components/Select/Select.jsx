import { useState } from "react";
import Wrapper from "./Wrapper";
import DropDown from "./DropDown";
import Chips from "./Chips";
import Placeholder from "./Placeholder";
import ResetAllIcon from "../../assets/cross.svg";

import styles from "./Select.module.css";
import { useDispatch } from "react-redux";
import { addFilter, removeFilter } from "../../slices/filterSlice";

/*
 isSingle - decides if we're able to make a single selection or multiple selections
 */

/* label - serves as a placeholder title*/
const Select = ({ isSingle, label, filter, filterKey }) => {


    /* Drop down open or closed state */
    const [isOpen, setIsOpen] = useState(false);

    /* All selected filters which will be shown as chips*/
    const [selectedFilters, setSelectedFilters] = useState([]);

    const dispatch = useDispatch();

    const handleToggleDropDown = () => {
        setIsOpen((op) => !op);
    };

    const handleCloseDropDown = () => {
        setIsOpen(false);
    };

    const handleAddFilters = (key, val) => {
        let filter = {
            key,
            val,
        };
        if (isSingle) {
            setSelectedFilters([val]);
            dispatch(addFilter(filter));
            return;
        }

        if (selectedFilters.includes(val)) return;

        setSelectedFilters(prev => {
            return [...prev, val];
        });
        dispatch(addFilter(filter));
    };

    const handleRemoveFilter = (key, val) => {
        let filter = {
            key,
            val,
        };
        setSelectedFilters(prev => prev.filter(op => op !== val));
        dispatch(removeFilter(filter));
    };

    const handleResetAllFilters = () => setSelectedFilters([]);

    return (
        <Wrapper
            onClick={handleToggleDropDown}
            filterKey={filterKey}
            onClose={handleCloseDropDown}
        >
            {isOpen && <DropDown filters={filter} onSelect={handleAddFilters.bind(null, label)} />}
            {<Placeholder isOutside={selectedFilters.length !== 0} label={label} />}
            {
                /* if there are selected filters, we would want to show filter chips */

                selectedFilters.length !== 0 && (
                    <>
                        <Chips
                            selectedFilters={selectedFilters}
                            onClick={handleRemoveFilter.bind(null, label)}
                        />
                        <button
                            className={styles["reset-all"]}
                            onClick={handleResetAllFilters}
                        >
                            <img src={ResetAllIcon} alt="Clear All" />
                        </button>
                    </>
                )
            }
        </Wrapper>
    );
};

export default Select;
