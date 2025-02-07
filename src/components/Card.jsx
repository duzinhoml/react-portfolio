import React from 'react';

function Card(props) {

    return(
            <div class="col">
                <div class="card h-100">
                    <img src={props.img} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <a href={props.link}>
                            <h5 class="card-title">{props.title}</h5>
                        </a>
                    </div>
                        <div class="card-footer">
                            <a href={props.page}>
                            <small class="text-body-secondary">{props.pageName}</small>
                            </a>
                        </div>
                </div>
            </div>
    );
};

Card.defaultProps = {
    page: '',
    pageName: ''
};

export default Card;