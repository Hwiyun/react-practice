import React, { Component } from 'react';
import React, { Component } from 'react';

class FoodList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {foods.map((food) => <FoodListItem
                                        key={food.no} 
                                        name={foods.name} 
                                        count= {foods.count} />)}
            </ul>
        );
    }
}

export default FoodList;