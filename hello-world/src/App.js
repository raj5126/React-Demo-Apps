import React,{Component} from 'react';
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Welcome from './components/Welcome';
import Count from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import Eventbind from './components/Eventbind';
import ParentComponent from './components/ParentComponent';
import Usergreeting from './components/Usergreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import Errorboundary from './components/Errorboundary';
import CounterClick from './components/CounterClick';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

class App extends Component {
  render(){
  return (
    <div className="App">
 
      {/* context demo */}
      {/* <UserProvider value='Raj'>
        <ComponentC/>
      </UserProvider> */}


      {/* Render props */}
      {/* <CounterTwo 
          render={(count,incrementCount) => ( 
          <ClickCounterTwo count={count} incrementCount={incrementCount}/>
          )}
      />
      <CounterTwo 
          render={(count,incrementCount) => ( 
          <HoverCounterTwo count={count} incrementCount={incrementCount}/>
          )}
      /> */}

      {/* <ClickCounterTwo/>  */}
      {/* <HoverCounterTwo/> */}
      {/* <User render={(isLoggedIn) => isLoggedIn ? 'Raj':'Guest'}/> */}
    
      {/* Higher order component */}
      {/* <CounterClick name='Raj'/> */}
      {/* <HoverCounter/> */}

      {/* Error Handeling */}
      {/* <Errorboundary>
        <Hero heroname="Raj"/>
      </Errorboundary>
      <Errorboundary>
        <Hero heroname="Joker"/>
      </Errorboundary> */}
       
      {/* Portal Demo */}
      {/* <PortalDemo/>  */}

      {/* Ref fowrading from parent to child component */}
      {/* <FRParentInput/> */}

      {/* Refs Demo */}
      {/* <RefsDemo/> */}
      {/* <FocusInput/> */}

      {/*Pure Component */}
      {/* <PureComp/> */}
      {/* <ParentComp/> */}


      {/* Fragments */}
      {/* <FragmentDemo/> */}
      {/* <Table/> */}

      {/* {Mounting and Update Lifecycle} */}
      {/* <LifecycleA/> */}

      {/* Form Handling */}
      {/* <Form/> */}

      {/* Pass parameter to child component */}
      {/* <Greet name = "Raj" profession="Computer Engineering"/> */}
      {/* <Welcome heroName = "Iron man"/> */}
      {/* <Greet name = "RV"/> */}
      {/* <Welcome heroName = "Captain America"/> */}
      
      {/* Click event example */}
      {/* <Message/> */}

      {/* Counter Example */}
      {/* <Count></Count> */}

      {/* Click in funtion and class */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}

      {/* Event binding */}
      {/* <Eventbind/> */}

      {/* Pass parametre to parent to child and child to parent */}
      {/* <ParentComponent/> */}

      {/* Rendering */}
      {/* <Usergreeting/> */}
      
      {/* Mapping example */}
      {/* <NameList/> */}

      {/* CSS example */}
      {/* <Stylesheet primary={false}/> */}
      {/* <Inline/> */}
      {/* <h1 className='error'>Error !</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
    </div>
  );
  }
}

export default App;