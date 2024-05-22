import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import { convertDateTime } from "../helpers";
// This is report component , data is coming from getProduct endpoint
const Reports = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetchAllProducts();
    }, []);
  
    const fetchAllProducts = async () => {
      await axios.get("http://127.0.0.1:8000/api/list").then(({ data }) => {
        setProducts(data);
      });
    };
    return (
        <>
         <div className="Desktop">
        <NavMenuDesktop />
      </div>

      <div className="Mobile">
        <NavMenuMobile />
      </div>
      <Container style={{marginTop:'150px'}}>
      <div className="section-title text-center mb-55" >
          <h2>All Products</h2>
          <p></p>
        </div>
      <Table className='mt-10' striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Created at</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
            return(
                <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{ convertDateTime(product.created_at)}</td>
              </tr>
            )
        })}
       
      </tbody>
    </Table>
      </Container>
    

    <div className="Desktop">
        <FooterDesktop />
      </div>

      <div className="Mobile">
        <FooterMobile />
      </div>
        </>
    );
};

export default Reports;