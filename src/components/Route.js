import useNavigation from "../hooks/useNavigation";

function Route({ path, children }) {
    const { currentPath } = useNavigation();

    return currentPath === path ? children : null;
}

export default Route;