Counter-App using REDUX
------------------------

-REDUX : A JavaScript library for predictable and maintanable global state management 

 <!--install react-redux and redux toolkit  -->
 >>npm i @reduxjs/toolkit react-redux 

 
- configureStore() is of type obj ==>configureStore({})
- reducer is inside configureStore, where state is stored 
    -only reducer can update the state (configure store and reducer is used bcz component cannot directly update the state)


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
