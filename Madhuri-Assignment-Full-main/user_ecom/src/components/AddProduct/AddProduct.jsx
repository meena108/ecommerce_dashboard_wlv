import React, { useState } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import axios from "axios";
import FooterDesktop from "../common/FooterDesktop";
import NavMenuDesktop from "../common/NavMenuDesktop";
import NavMenuMobile from "../common/NavMenuMobile";
import FooterMobile from "../common/FooterMobile";
import { Toast } from "../../helpers";

//Adding product to an new product
const AddProduct = ({ history }) => {
  //defining state variable using useState hook
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  //function to handle image input change
  const handleImageInput = (event) => {
    const file = event.target.files[0];
    setImage(file);

    const reader = new FileReader(); //create new reader file object
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result); //set image preview
    };
    reader.readAsDataURL(file); //read file from the data
  };

  //function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(); // Create a new FormData object
    if (image) {
      formData.append("image", image); // Append image file to form data
    }
    formData.append("name", name); // Append name to form data
    formData.append("description", description); // Append description to form data
    formData.append("price", price); // Append price to form data
    try {
      //sending post request to product adding
      const response = await axios.post(
        "http://127.0.0.1:8000/api/addProduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      Toast("success", { data: { message: "Product Added Successfully" } });
      history.push("/addproduct"); //redirect to add product
    } catch (error) {
      if (error.response) {
        Toast("error", {
          data: { message: error.response.data.message || "Failed to create" },
        }); // show error with toast responses

        console.error("Add product error:", error.response.data);
      } else {
        Toast("error", { data: { message: "Failed to create" } });
        console.error("Add product error:", error.message);
      }
    }
  };

  return (
    <>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>

      <div className="Mobile">
        <NavMenuMobile />
      </div>
      <Container style={{ marginTop: "150px" }}>
        <div className="section-title text-center mb-55">
          <h2>ADD PRODUCT</h2>
          <p>Some Of Our Exclusive Collection, You May Add</p>
        </div>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="productName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="productPrice">
                <Form.Label>Product Price</Form.Label>
                <Form.Control
                  type="number"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="productDescription">
                <Form.Label>Product Description</Form.Label>
                <Form.Control
                  type="text"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="productFilePath">
                <Form.Label>Product Image</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  onChange={handleImageInput}
                />
              </Form.Group>
            </Col>
          </Row>
          {imagePreviewUrl && (
            <Row>
              <Col className="text-center">
                <div className="my-3">
                  <img
                    src={imagePreviewUrl}
                    alt="Product"
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
              </Col>
            </Row>
          )}
          <Row>
            <Col className="d-flex justify-content-center mt-4">
              <Button variant="primary" type="submit">
                Add Product
              </Button>
            </Col>
          </Row>
        </Form>
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

export default withRouter(AddProduct); // Exporting AddProduct component with router
