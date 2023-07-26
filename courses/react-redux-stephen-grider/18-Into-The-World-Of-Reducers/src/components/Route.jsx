import useNavigation from "../hooks/useNavigation.jsx";

export default function Route({ path, children }) {
    const { curPath } = useNavigation();

    return curPath === path ? children : null;
}
