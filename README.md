# React Native User Authentication App

## Overview

A React Native authentication application built using:
- React Native
- Expo Router
- React Context API
- Supabase Authentication
- AsyncStorage
- NativeWind


## Features

- User signup
- User login
- User logout
- Authentication state management using Context API
- Persistent authentication session
- Form validation
- Password visibility toggle


## Setup Instructions

### Install dependencies

npm install


### Configure environment variables

Create a .env file:

EXPO_PUBLIC_SUPABASE_URL=
EXPO_PUBLIC_SUPABASE_ANON_KEY=


### Run project

npx expo start


## Architecture

AuthContext manages:
- Current user
- Login
- Signup
- Logout
- Session restoration


## Screenshots

### Authentication Flow

<p align="center">
  <img src="/assets/screenshots/login-screen.png" width="250"/>
  <img src="/assets/screenshots/register-screen.png" width="250"/>
</p>

### Main Application

<p align="center">
  <img src="/assets/screenshots/home-screen.png" width="250"/>
  <img src="/assets/screenshots/profile-screen.png" width="250"/>
</p>

<p align="center">
  <img src="/assets/screenshots/dummy-screen1.png" width="250"/>
  <img src="/assets/screenshots/dummy-screen2.png" width="250"/>
</p>

<p>
    Project Demostration: https://youtu.be/c92FncIT4CA
</p>