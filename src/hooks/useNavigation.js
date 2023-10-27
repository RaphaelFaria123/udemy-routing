import NavigationContext from "../context/navigationProvider";
import { useContext } from "react";

function useNavigation() {
    return useContext(NavigationContext);
}

export default useNavigation;