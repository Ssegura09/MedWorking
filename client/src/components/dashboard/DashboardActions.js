import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardActions = () => {
  return (
    <div class='dash-buttons'>
      <Link to='/edit-profile' class='btn'>
        <i class='fas fa-user-edit text-primary'></i> Edit Profile
      </Link>
      <Link to='/add-experience' class='btn'>
        <i class='fas fa-briefcase text-primary'></i> Add Experience
      </Link>
      <Link to='/add-education' class='btn'>
        <i class='fas fa-school text-primary'></i> Add Education
      </Link>
    </div>
  );
};

export default DashboardActions;
