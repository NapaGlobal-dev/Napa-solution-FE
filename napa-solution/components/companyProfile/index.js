import React from 'react';
import style from '../../styles/companyProfile.module.css'
import Banner from './banner';
import ListEmployee from './listEmployee';
import Related from './related';
import Summary from './summary';
const CompanyProfile = (props) => {
    return (
        <div>
            <Banner />
            <Summary />
            <ListEmployee />
            <Related />
        </div>
    );
}

export default CompanyProfile;