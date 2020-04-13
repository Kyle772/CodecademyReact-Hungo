import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business'

class BusinessList extends React.Component {
    constructor(props) {
        super(props);
        this.businessCallback = this.businessCallback.bind(this);
    }

    businessCallback(business) {
        return (
            <Business business={business}/>
        );
    }

    render() {
        return (
            <div className="BusinessList">
                { this.props.businesses.map(this.businessCallback(business)) }
            </div>
        )
    }
}

export default BusinessList;