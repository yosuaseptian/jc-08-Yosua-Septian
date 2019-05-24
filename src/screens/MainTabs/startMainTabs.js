import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

const startTabs = () => {
    Promise.all([
        Icon.getImageSource('md-map', 30),
        Icon.getImageSource('ios-share-alt', 30),
        Icon.getImageSource('ios-menu', 30),
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: 'jc8reactnative.FindPlaceScreen',
                    label: 'List Karyawan',
                    title: 'List Karyawan',
                    icon: sources[0],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: 'Menu',
                                id: 'sideDrawerToggle'
                            }
                        ]
                    }
                },
                {
                    screen: 'jc8reactnative.SharePlaceScreen',
                    label: 'Input Data',
                    title: 'Input Data',
                    icon: sources[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: 'Menu',
                                id: 'sideDrawerToggle'
                            }
                        ]
                    }
                },
            ],
            drawer: {
                left: {
                    screen: 'jc8reactnative.SideDrawerScreen',
                    
                }
            }
        })
    })
}

const backToRoot = () => {
    Navigation.startSingleScreenApp({
        screen: {
            screen: 'jc8reactnative.AuthScreen',
            title: 'Authentication'
        }
    })
}

module.exports = {
    backToRoot, startTabs
}