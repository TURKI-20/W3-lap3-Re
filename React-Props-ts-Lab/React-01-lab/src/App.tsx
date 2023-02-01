import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Programers from './component/Programers'
import Service from './component/Service'
import Companies from './component/Companies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <div className="prog">

        <Programers
          name={"Turki"}
          languages={[ " HTML5 ,", " CSS ," ," JAVASCRIPT"]}
          yearsOfEx={1}
          company={"NO COMPANY"}
        />
        <Programers
          name={"HAITHAM"}
          languages={["JAVASCRIPT ,", " JAVA ,", " PHP "]}
          yearsOfEx={6}
          company={"TUWAIQ"}
        />
        <Programers
          name={"MASHA"}
          languages={["JAVA ,", " JAVASCRIPT ,", " TYPESCRIPT"]}
          yearsOfEx={8}
          company={"TUWAIQ"}
        />
      </div>
      <div className="prog">
        <Companies
          nameCompany="Aramco"
          numberEmployees={65.282}
          yearFounded={1933}
        />
        <Companies
          nameCompany="Sabek"
          numberEmployees={ 40000}
          yearFounded={1976}
        />
        </div>
        <div className="prog">
        <Service
         Services={` Intensive Courses in Computer Science`}
         price={0}
        />
      </div>
    </div>
  )
}

export default App
