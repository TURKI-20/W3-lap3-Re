import React from 'react'

interface Companies {

    nameCompany: string,
    numberEmployees: number,
    yearFounded: number,

}

function Companies(props:Companies) {
  return (
    <div className="content">
      <h1>{props.nameCompany}</h1>
      <h3>Num of employees : {props.numberEmployees}</h3>
      <h3>year of Founded :{props.yearFounded}</h3>
    </div>
  );
}

export default Companies