//import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Interweave, Filter } from "interweave";

//TODO: move to filters
class DescriptionFilter extends Filter {
  constructor(className = "css-class") {
    super();
    this.className = className;
  }

  node(name, node) {
    if (name === "p") {
      node.setAttribute("class", this.className);
    }
    return node;
  }
}

function ProductDetailsPage(props) {
  const { id } = props;

  const PRODUCT_QUERY = gql`
    query Product($id: String!) {
      product(id: $id) {
        name
        inStock
        description
      }
    }
  `;

  const response = useQuery(PRODUCT_QUERY, {
    variables: {id},
  });
  const { loading, error, data } = response;
  if (error) {
    console.error(error);
  }

  const { product } = !loading? data : {};
  
  return (<>
    {loading ?
      <p>Loading...</p>
      :
      <div>
        <h2>{product.name}</h2>
        <Interweave content={product.description} filters={[new DescriptionFilter("product-description")]} />
        <p>In stock: {product.inStock? "Yes" : "No"}</p>
      </div >
    }
  </> );
}

export default ProductDetailsPage;  