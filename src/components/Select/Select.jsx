import { useState } from "react";
import Wrapper from "./Wrapper";
import DropDown from "./DropDown";
import Chips from "./Chips";
import Placeholder from "./Placeholder";
import ResetAllIcon from "../../assets/cross.svg";

import styles from "./Select.module.css";

const DummyFilters = [
    "Indiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "USA",
    "AFG",
    "AUS",
];

/* isSingle is a prop that decides if we're able to make a single selection or multiple selections
as we have minimum experience and min base salary which are single field selections */

/* label - serves as a placeholder */
const Select = ({ isSingle, label = "Label" }) => {
    const [isOpen, setIsOpen] =
        useState(false); /* defines whether drop down is open or not */
    const [selectedFilters, setSelectedFilters] = useState(
        []
    ); /* holds all the selected filters which will be shown as chips*/

    const handleToggleDropDown = () => {
        setIsOpen((op) => !op);
    };

    const handleCloseDropDown = () => {
        setIsOpen(false);
    };

    const handleSelectFilters = (val) => {
        if (isSingle) {
            return setSelectedFilters([val]);
        }

        setSelectedFilters((prev) => {
            if (prev.includes(val)) return prev;

            return [...prev, val];
        });
    };

    const handleRemoveFilter = (val) => {
        setSelectedFilters((prev) => prev.filter((op) => op !== val));
    };
    const handleResetAllFilters = () => setSelectedFilters([]);

    return (
        <Wrapper onClick={handleToggleDropDown}>
            {isOpen && (
                <DropDown filters={DummyFilters} onSelect={handleSelectFilters} />
            )}
            {<Placeholder isOutside={selectedFilters.length !== 0} label={label} />}
            {
                /* if there are selected filters, we would want to show filter chips */

                selectedFilters.length !== 0 && (
                    <>
                        <Chips
                            selectedFilters={selectedFilters}
                            onClick={handleRemoveFilter}
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
