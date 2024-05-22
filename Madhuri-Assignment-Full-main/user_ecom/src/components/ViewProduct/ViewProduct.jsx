import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import NavMenuDesktop from "../common/NavMenuDesktop";
import NavMenuMobile from "../common/NavMenuMobile";
import FooterMobile from "../common/FooterMobile";
import FooterDesktop from "../common/FooterDesktop";

const ViewProduct = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    await axios.get("http://127.0.0.1:8000/api/list").then(({ data }) => {
      setProducts(data);
    });
  };

  const searchProdct = async () =>{
    axios.post('http://127.0.0.1:8000/api/search', {
      searchQuery:searchQuery
    })
    .then(function (response) {
     if(response) {
      console.log("response", response)
      setProducts(response.data?.products);
     }
    })
    .catch(function (error) {
      console.log(error);
    });
  } 

  return (
    <>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>

      <div className="Mobile">
        <NavMenuMobile />
      </div>
      <br />
      <Container className="text-center" fluid>
        <div className="section-title text-center mb-55 m-10">
          <h2>MY PRODUCT LIST ITEMS</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>
        <div className="d-flex justify-content-center">
          <div className="input-group mb-3 search-width">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Search products..."
              aria-label="Search products..."
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <Button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={searchProdct}
              >
                <i className="fa fa-search"></i>
              </Button>
            </div>
          </div>
        </div>
        <Row>
          {products?.map((product)=>{
            return(
              <Col key={product.id} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  alt={product.name}
                  className="center w-75"
                  src={`http://localhost:8000/product/images/${product.image}`}
                />
                <Card.Body>
                  <h5 className="product-name-on-card">{product.name}</h5>
                  <p className="product-id-on-card">ID: {product.id}</p>
                  <p className="product-description-on-card">
                    {product.description}
                  </p>
                  <p className="product-price-on-card">
                    Price: ${product.price}
                  </p>
                </Card.Body>
              </Card>
            </Col>
            )
          })}
        
        </Row>
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

export default ViewProduct;

/*
class ViewProduct extends Component {
  state = {
    products: [],
    isLoading: true,
    error: null,
    searchKey: "",
  };

  componentDidMount() {
    this.fetchProducts();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.fetchProducts();
    }
  }

  fetchProducts = (searchKey = "") => {
    const timestamp = Date.now();
    const url = searchKey
      ? `http://127.0.0.1:8000/api/search/${searchKey}`
      : "http://127.0.0.1:8000/api/list";
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => this.setState({ products: data, isLoading: false }))
      .catch((error) => this.setState({ error, isLoading: false }));
  };

  delete = (id) => {
    fetch(`http://127.0.0.1:8000/api/delete/${id}`, { method: "DELETE" })
      .then(() => this.fetchProducts())
      .catch((error) => console.error("Error:", error));
  };

  updateProduct = (id, updatedProduct) => {
    fetch(`http://127.0.0.1:8000/api/update/${id}?_method=PUT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then(() => this.fetchProducts())
      .catch((error) => console.error("Error:", error));
  };

  render() {
    const { products, isLoading, error } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      
    );
  }
}

export default withRouter(ViewProduct);
*/
