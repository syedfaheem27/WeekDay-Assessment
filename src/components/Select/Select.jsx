import { useState } from "react";
import Wrapper from "./Wrapper";
import DropDown from "./DropDown";

const DummyFilters = ["India", "USA", "AFG", "AUS"];

/* isSingle is a prop that decides if we're able to make a single selection or multiple selections
as we have minimum experience and min base salary which are single field selections */
const Select = ({ isSingle }) => {
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

    console.log(selectedFilters);

    return (
        <Wrapper onClick={handleToggleDropDown}>
            {isOpen && (
                <DropDown filters={DummyFilters} onSelect={handleSelectFilters} />
            )}
            {
                /* if there are selected filters, we would want to show filter chips */

                selectedFilters.length !== 0 && (
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            transform: "translateY(-50%)",
                            display: 'flex',
                            gap: '4px',
                            alignItems: 'center',
                        }}
                    >
                        {selectedFilters.map((filter, index) => {
                            return <span key={filter + index}>{filter}</span>;
                        })}
                    </div>
                )
            }
        </Wrapper>
    );
};

export default Select;
