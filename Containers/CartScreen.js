//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Products from "../components/Products";
import {connect} from "react-redux";
// create a component
class CartScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            {
                this.props.cartItems.length > 0 ?
                <Products
                onPress = {this.props.removeItem}
                products={this.props.cartItems} />:
                <Text>NO ITEM IN YOUR CART</Text>
            }
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

const mapStateToProps = (state)=>{
    return {
        cartItems:state
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        removeItem:(product) => dispatch({
            type:"REMOVE_FROM_CART",
            payload:product
        })
    }
}
//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
