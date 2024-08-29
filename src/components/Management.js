import React from 'react';
import '../components/Management.css';

function Management(){
    return(
        <div className='section'>
            <div className='dashboard'>
                <div className='sidebaricon'>
                    
                </div>
                <div className="sidebar">
                <i className="fas fa-users"></i><br></br>Student Management
                </div>
                <div className="sidebar">
                    <i className="fas fa-money-check-alt"></i><br></br>Financial Management
                </div>
                <div className="sidebar">
                    <i className="fas fa-tasks"></i><br></br> Quality Control
                </div>
                <div className="sidebar">
                    <i className="fas fa-file-alt"></i><br></br> Report Delivery
                </div>
                <div className="sidebar">
                    <i className="fas fa-calendar-check"></i><br></br> Attendance
                </div>
            </div>
            <div className='content'>
                <div className='header'>
                    <h1>Student Management</h1>
                </div>
            <div className='container'>
                <div class="regularcard">
                    <i className="fas fa-user"></i><span>8</span>
                    <h1>Regular students</h1>
                </div>
                <div class="remedialcard">
                    <i className="fas fa-user-graduate"></i><span>32</span>
                    <h1>Remidial Students</h1>
                </div>
                <div class="clubcard">
                    <i className="fas fa-user-circle"></i><span>00</span>
                    <h1>In Paid Club</h1>
                </div>
            </div>
            <h3 class="menu">Menu</h3>
            <div class="menu-content">
            <div class="menu-profile">
                <i className="fas fa-user-plus"></i>
                <h1>Regular Enrollment</h1>
            </div>
            <div class="menu-profile">
                <i className="fas fa-user-minus"></i>
                <h1>Remedial Enrollment</h1>
            </div>
            <div class="menu-profile">
                <i className="fas fa-users-cog"></i>
                <h1>Club Management</h1>
            </div>
            <div class="menu-profile">
                <i className="fas fa-envelope"></i>
                <h1>Classroom Management</h1>
            </div>
            <div class="menu-profile">
                <i className="fas fa-envelope"></i>
                <h1>SMS/EMAIL</h1>
            </div>
            <div class="menu-profile">
                <i className="fas fa-chart-bar"></i>
                <h1>Attendence</h1>
            </div>
            <div class="menu-profile">
                <i className="fas fa-clinic-medical"></i>
                <h1>Clinic</h1>
            </div>
            </div>
        </div>
    </div>
    );
}
export default Management;