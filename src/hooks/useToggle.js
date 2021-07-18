import { useState } from "react"

const useToggle = (initialState=true) => {
    const [visible, setVisible] = useState(initialState);

    function toggle() {

        setVisible(previousVisable => !previousVisable);
    }

    return [visible, toggle];

}

export default useToggle