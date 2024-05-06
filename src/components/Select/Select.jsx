import { useState } from "react"
import Wrapper from "./Wrapper"
import DropDown from "./DropDown"

const DummyFilters = [
    "India",
    "USA",
    "AFG",
    "AUS"
]


const Select = () => {
    const [isOpen, setIsOpen] = useState(false) /* defines whether drop down is open or not */

    const handleToggleDropDown = () => {
        setIsOpen(op => !op);
    }

    const handleCloseDropDown = () => {
        setIsOpen(false)
    }



    return (
        <Wrapper onClick={handleToggleDropDown}>
            {
                isOpen && <DropDown filters={DummyFilters} />
            }
        </Wrapper>
    )
}

export default Select
