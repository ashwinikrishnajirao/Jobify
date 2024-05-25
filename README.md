# Jobify - Modern Job Portal Platform

## Overview
Jobify is a sophisticated web application aimed at revolutionizing the job search experience for both job seekers and employers. Built using the MERN stack - MongoDB, Express.js, React.js, and Node.js - Jobify offers a comprehensive set of functionalities designed to streamline the recruitment process and enhance user engagement.

## Features
- **Advanced Job Browsing**: Efficiently explore job listings with filtering options based on salary, location, experience level, etc.
- **AI-Based Job Recommendations**: Receive personalized job recommendations tailored to your profile.
- **Subscription Functionality**: Subscribe to updates and receive notifications about new job listings and industry trends via email.
- **User Authentication**: Secure user registration and login processes.
- **Job Management**: Post, update, and delete job listings with ease.
- **Salary Estimates**: Get insights into salary estimates based on industry standards and trends.

## Technologies Used
- **MongoDB**: Efficient data storage and management.
- **Express.js**: Simplifies server-side development.
- **React.js**: Enables the creation of dynamic and responsive user interfaces.
- **Node.js**: Ensures seamless server-side operations.

## Motivation
The motivation behind Jobify is to meet the evolving needs of job seekers and employers in an era marked by digital transformation and remote work trends. By harnessing the potential of the MERN stack and innovative features, Jobify aims to provide a cutting-edge job portal solution that addresses the challenges faced by modern job seekers and employers.

## System Requirements
### Hardware Requirements
- **Processor**: x86 compatible processor with 1.7 GHz Clock Speed
- **RAM**: 1024 MB or greater
- **Hard Disk**: 20 GB or greater
- **Monitor**: VGA/SVGA
- **Keyboard**: 104 keys standard
- **Mouse**: 2/3 button, Optical/Mechanical

### Software Requirements
- **Operating System**: Windows 7/8/10, Linux, Mac OS X
- **MERN Stack Components**: MongoDB, Express.js, React.js, Node.js
- **Internet Connection**: Recommended for accessing online resources

## Functionalities
### Start a Search
- **Search Bar**: Located on the homepage for entering keywords, locations, or other criteria.
- **Database Query**: Fetches relevant job listings matching the user's input.

### My Jobs Page
- **Navigation Access**: View all job listings posted by the user.
- **Job Listing Details**: Includes job title, company name, location, and posted date.
- **Update/Delete Options**: Directly update or delete job listings from this page.

### Salary Estimate Page
- **Input Field**: Enter domain or field of work to receive salary estimates.
- **Tailored Estimates**: Based on industry standards and trends.

### Update/Delete Jobs
- **Job Listing Management**: Update or delete individual job listings.
- **Database Updates**: Reflects changes in the database.

## Installation Instructions
### Prerequisites
- **Node.js**: Ensure Node.js is installed on your system.
- **MongoDB**: Ensure MongoDB is installed and running.

### Steps
1. **Clone the Repository**
    ```bash
    git clone https://github.com/ashwinikrishnajirao/jobify.git
    cd jobify
    ```

2. **Install Dependencies**
    ```bash
    npm install
    cd client
    npm install
    cd ..
    ```

3. **Environment Variables**
    - Create a `.env` file in the root directory and add the following variables:
      ```env
      MONGO_URI=your_mongodb_uri
      JWT_SECRET=your_jwt_secret
      EMAIL_USER=your_email_user
      EMAIL_PASS=your_email_password
      ```

4. **Run the Application**
    ```bash
    npm run dev
    ```

## Contribution
We welcome contributions to enhance the functionality and features of this project. Please fork the repository and create a pull request with your changes.



---

This README provides a detailed overview of Jobify, including its features, technologies, system requirements, functionalities, and installation instructions. The goal is to offer a reliable, efficient, and user-friendly job portal solution for modern job seekers and employers.
