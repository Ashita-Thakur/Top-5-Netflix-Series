// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import './index.css';
import sdata from './sdata';

console.log(ncard);
function ncard(val){
    return(
        <Card imgsrc={val.imgsrc} 
        title={val.title}
        sname={val.sname}
        link={val.link}
        />
        )
}

ReactDOM.render(
<>
<h1 className='heading_style'>List of Top 5 Netflix Series </h1>

{sdata.map(ncard)}
{sdata.map((val)=>{
    return(
        <Card imgsrc={val.imgsrc} 
        title={val.title}
        sname={val.sname}
        link={val.link}
        />
        )
})}


</>
,document.getElementById('root')
);