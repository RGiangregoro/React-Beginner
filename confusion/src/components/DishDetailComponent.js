import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component{

    constructor(props) {
        super(props);

        this.state = {
            selectedDishDetail: null
        };
    }

    renderDish(dish) {

        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name}</CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>   
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderComments(comments){
        if (comments != null) {
            //TODO Format the date???
            const theComments = comments.map(c => {
                return (
                    <li key={c.id}>
                        <p>{c.comment}</p>
                        <p>-- {c.author}, {c.date}</p> 
                    </li>
                )
            })
            return (
                <div className='col-12 col-md-5 m-1'>
                    <h4> Comments </h4>
                    <ul className='list-unstyled'>
                        {theComments}
                    </ul>
                </div>
            )
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render(){
        const dish = this.props.dish
        
        if (dish == null) {
            return (<div></div>);
        }

        const dishItem = this.renderDish(dish);
        const dishComment = this.renderComments(dish.comments);

        return (
            <div className='row'>
                {dishItem}
                {dishComment}
            </div>
        )
    }
}

export default DishDetail;