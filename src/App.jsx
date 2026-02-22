import './App.css';
import { useState } from 'react';
import { Counter } from './components/Counter/Counter';
import { LoginCard } from './components/LoginCard/LoginCard';
import { UserDashboard } from './components/UserDashBoard/UserDashBoard';
import { SimpleCounter } from './components/SimpleCounter/SimpleCounter';
import { PreStateCounter } from './components/PreStateCounter/PreStateCounter';
import { BatchingCounter } from './components/BatchingCounter/BatchingCounter';
import { UserProfile } from './components/UserProfile/UserProfile';
import { ToDoList } from './components/ToDoList/ToDoList';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import { CounterWithReducer } from './components/CounterWithReducer/CounterWithReducer';
import { ShoppingCartWithReducer } from './components/ShoppingCartWithReducer/ShoppingCartWithReducer';
import { CounterWithInit } from './components/CounterWithInit/CounterWithInit';
import { CustomCounter } from './components/CustomCounter/CustomCounter';
import { Header } from './components/Header/Header';
import { UserContextProvider } from './context/UserContextProvider/UserContextProvider';
import { StopWatch } from './components/StopWatch/StopWatch';
import { FocusInput } from './components/FocusInput/FocusInput';

function App() {
  return (
    <>
      <h2>React Learning</h2>

      < FocusInput />

      {/* < ToDoList /> 
      < UserProfile /> 
      < BatchingCounter /> 
      < PreStateCounter />
      < SimpleCounter /> 
      < UserDashboard isPremium={true} />
      < Counter />
      < LoginCard />
      < Counter /> 
      < ShoppingCart /> 
      < CounterWithReducer />
      < ShoppingCartWithReducer /> 
      < CounterWithInit />
      < CustomCounter />
      <UserContextProvider> 
        <div>
          <h1>Dashboard</h1>
          < Header />
        </div>
      </UserContextProvider>
      
      <StopWatch /> */}
    </>
  )
}

export default App;