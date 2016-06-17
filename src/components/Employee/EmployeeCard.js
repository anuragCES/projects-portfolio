import React from 'react';

const EmployeeCard = ({employee}) => {
    return (
        <div className="card">
            <img className="card-img-top" data-src="..." alt="Card image cap" />
            <div className="card-block">
                <span className="label label-pill label-default">{employee.id}</span>
                <p className="card-text">{employee.id}</p>
                <a href="#" className="btn btn-primary">View</a>
            </div>
        </div>
    );
}

export default EmployeeCard;