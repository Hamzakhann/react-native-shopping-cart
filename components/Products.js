//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class Products extends Component {
    constructor(props){
        super(props)
    }
    renderProducts = (products) =>{
        return products.map((item , index) =>{
            return(
                <View key={index} style={{padding:20}} >
                <Button onPress={() => this.props.onPress(item)} 
                title={item.name + ' - ' + item.price }
                />
                </View>
            )
        })
    }
    render() {
        return (
            <View style={styles.container}>
            {this.renderProducts(this.props.products)}
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        width:"100%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Products;
