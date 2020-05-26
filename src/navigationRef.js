import { NavigationActions } from 'react-navigation';

let navigator;

export const setNavigator = (nav) => {
    navigatior = nav;
}

export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
}