import React , {Component} from 'react'
import {
    View ,
    Text,
    StyleSheet
} from "react-native"
import {createStackNavigator , createAppContainer} from "react-navigation"
import HomeScreen from "./Containers/HomeScreen";
import ElectronicsScreen from "./Containers/ElectronicsScreen";
import BooksScreen from "./Containers/BooksScreen";
import ShoppingCartIcon from "./Containers/ShoppingCartIcon"
import CartScreen from "./Containers/CartScreen";
const AppStackNavigator = createStackNavigator({
    Home:HomeScreen,
    Electronics:ElectronicsScreen,
    Books:BooksScreen,
    Cart: CartScreen,
    ShoppingCartIcon:ShoppingCartIcon
},{
    defaultNavigationOptions:{
        headerTitle:"Shooping App",
        headerRight:(
            <ShoppingCartIcon/>
        )
    }
})

const AppContainer = createAppContainer(AppStackNavigator)

class ShoppingCart extends Component{
    render(){
        return(
            <AppContainer/>
        )
    }
}

export default ShoppingCart;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:"center"
    }
})