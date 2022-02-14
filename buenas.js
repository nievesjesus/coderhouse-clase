// JSX shorthand

// MALO
return ( <Navbar showTitle={true} />)

// BUENO
return (
  <Navbar showTitle />  
)

// Ternary operators

// MALO
const { role } = user;

if(role === ADMIN) {
  return <AdminUser />
}else{
  return <NormalUser />
} 

// BUENO
const { role } = user;

return role === ADMIN ? <AdminUser /> : <NormalUser />


// Object literals

// MALO
const {role} = user

switch(role){
  case ADMIN:
    return <AdminUser />
  case EMPLOYEE:
    return <EmployeeUser />
  case USER:
    return <NormalUser />
}

// BUENO
const {role} = user

const components = {
  ADMIN: AdminUser,
  EMPLOYEE: EmployeeUser,
  USER: NormalUser
};

const Component = components[role];

return <Compoent />;


// Usar fragments

// MALO
return (
  <div>
     <Component1 />
     <Component2 />
     <Component3 />
  </div>  
)

// BUENO
return (
  <>
     <Component1 />
     <Component2 />
     <Component3 />
  </>  
)

// No definir functiones en el render

// MALO
return (<button onClick={ () => eventoClick(ACTION_DATA) }> </button>)

// BUENO
const enviarData = () => eventoClick(ACTION_DATA)

return (<button onClick={enviarData}></button>)

// Usar useMemo

// MALO
import React, { useState } from "react";

export const TestMemo = () => {
  const [userName, setUserName] = useState("faisal");
  const [count, setCount] = useState(0);
  
  const increment = () => setCount((count) => count + 1);
  
  return (
    <>
      <ChildrenComponent userName={userName} />
      <button onClick={increment}> Increment </button>
    </>
  );
};

const ChildrenComponent =({ userName }) => {
  console.log("rendered", userName);
  return <div> {userName} </div>;
};

// BUENO
const ChildrenComponent = React.memo(({userName}) => {
  console.log('rendered')
  return <div> {userName}</div>
})

// Poner CSS en javascript

// MALO
.body {
  height: 10px;
}

return <div className='body'>
   
</div>

// BUENO
const bodyStyle = {
  height: "10px"
}

return <div style={bodyStyle}>

</div>

// Usar destructuring 

// MALO
return (
  <>
    <div> {user.name} </div>
    <div> {user.age} </div>
    <div> {user.profession} </div>
  </>  
)

// BUENO
const { name, age, profession } = user;

return (
  <>
    <div> {name} </div>
    <div> {age} </div>
    <div> {profession} </div>
  </>  
)


// Los strings no necesitan los braces

// MALO
return(
  <Navbar title={"My Special App"} />
)

// BUENO
return(
  <Navbar title="My Special App" />  
)

// No agregar codigo javascript en los JSX
return (
  <ul>
    {posts.map((post) => (
      <li onClick={event => {
        console.log(event.target, 'clicked!'); // <- ES MUY MALO
        }} key={post.id}>{post.title}
      </li>
    ))}
  </ul>
);

// BUENO
const onClickHandler = (event) => {
  console.log(event.target, 'clicked!'); 
}

return (
 <ul>
   {posts.map((post) => (
     <li onClick={onClickHandler} key={post.id}> {post.title} </li>
   ))}
 </ul>
);


// Usar tempalte / string literals

// MALO
const userDetails = user.name + "'s profession is" + user.proffession

return (
  <div> {userDetails} </div>  
)

// BUENO
const userDetails = `${user.name}'s profession is ${user.proffession}`

return (
  <div> {userDetails} </div>  
)


// El orden de importacion IMPORTA!!

// MALO
import React from 'react';
import ErrorImg from '../../assets/images/error.png';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { PropTypes } from 'prop-types';

// RULES
// built-int
// external 
// internal
import React from 'react';

import { PropTypes } from 'prop-types';
import styled from 'styled-components/native';

import ErrorImg from '../../assets/images/error.png';
import colors from '../../styles/colors';

// Usar return implicito, cuando se pueda

// MALO
const add = (a, b) => {
  return a + b;
}

// BUENO
const add = (a, b) => a + b;


// Naming de components

// MALO
import reservationCard from './ReservationCard';

const ReservationItem = <ReservationCard />;

// BUENA
import ReservationCard from './ReservationCard';

const reservationItem = <ReservationCard />;


// Las comillas
// usamos doble comillas para los atributos JSX y comilla simple para todo lo demas realacionado a JS

// MALO
return (
  <>
    <Foo bar='bar' />

    <Foo style={{ left: "20px" }} />  
  </>
)



// BUENO

return (
  <>
  <Foo bar="bar" />

  <Foo style={{ left: '20px' }} />
  </>
)

// El nombre de los props

// MALO

return (
<Component
  UserName="hello"
  phone_number={12345678}
/>  
)

// BUENO

return (
<MyComponent
  userName="hello"
  phoneNumber={12345678}
  Component={SomeComponent}
/>  
)
// get data from categories

// // camel case
// get Data From Categories

// // pascal case
// Get Data From Categories


// Cuando usar parentesis en JSX
// si mi componente ocupa mas de dos lineas

// MALO
return <MyComponent variant="long">
           <MyChild />
         </MyComponent>;

// BUENO 
return (
  <MyComponent variant="long">
    <MyChild />
  </MyComponent>
);


// Components con tag autocerrables 

// MALO
return (<SomeComponent variant="stuff"></SomeComponent>)

// BUENO
return <SomeComponent variant="stuff" />


// nombre de metodos y variables

// MALO
// this.onClickHander
const _onClickHandler = () => {
  // do stuff
}

// BUENO
const onClickHandler = () => {
  // do stuff
}
























