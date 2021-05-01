import React, { Component, Fragment } from 'react';
import Product from './Product';
import axios from 'axios';
const config = require('../config.json');

export default class ProductAdmin extends Component {

    state = {
        newproduct: {
            "productname": "",
            "id": ""
        },
        products: []
    }

    handleAddProduct = async (id, event) => {
        event.preventDefault();
        // add call to AWS API Gateway add product endpoint here
        try {
            const params = {
                "id": id,
                "productname": this.state.newproduct.productname
            };
            await axios.post(`${config.api.invokeUrl}/recipe`, params);
            this.setState({ products: [...this.state.products, this.state.newproduct] });
            this.setState({ newproduct: { "productnam": "", "id": ""} });
        } catch (err) {
            console.log(`An error has occurred: ${err}`);
        }
    }

    handleUpdateProduct = async (id, name) => {
        // add call to AWS API Gateway update product endpoint here
        try {
            const params = {
                "id": id,
                "productname": name
            };
            await axios.patch(`${config.api.invokeUrl}/recipe/${id}`, params);
            const productToUpdate = [...this.state.products].find(product => product.id === id);
            const updatedProducts = [...this.state.products].filter(product => product.id !== id);
            productToUpdate.productname = name;
            updatedProducts.push(productToUpdate);
            this.setState({products: updatedProducts});
        } catch(err) {
            console.log(`Error updating product: ${err}`);
        }
    }
}