import React, { useState } from 'react'
import {
    Form, FormGroup, FormControl, ControlLabel,
    Button, ButtonToolbar
} from 'rsuite';

const AddProductForm = (props) => {

    const [name, setName] = useState("");    // this.state = {name:""}
    const [desciption, setDesciption] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [imageUrl, setImageUrl] = useState(0);

    
    const handleCreate = () => {
        props.onCreate({ name, desciption, price, quantity, imageUrl })
    }

    return (
        <div className="content-form">
            <Form>
                <FormGroup>
                    <ControlLabel>Name</ControlLabel>
                    <FormControl name="name" type="text" onChange={(e) => setName(e)} />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Desciption</ControlLabel>
                    <FormControl rows={5} name="desciption" componentClass="textarea" onChange={(e) => setDesciption(e)} />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Price</ControlLabel>
                    <FormControl name="price" type="number" onChange={(e) => setPrice(e)} />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Quantity</ControlLabel>
                    <FormControl name="quantity" type="number" onChange={(e) => setQuantity(e)} />
                </FormGroup>

                <div className="input-img">
                    <p>Img</p>
                    <input name="img" type="file" onChange={(e) => setImageUrl(e.target.value)} />
                </div>
                <FormGroup>
                    <ButtonToolbar>
                        <Button appearance="primary" onClick={handleCreate}>Create</Button>
                    </ButtonToolbar>
                </FormGroup>
            </Form>
        </div>
    )
}
export default AddProductForm;