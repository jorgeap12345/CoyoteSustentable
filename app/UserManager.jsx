import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';
import { useAppContext } from "../context/AppContext";


export default function App() {

    

    const {isInLogin, setIsInLogin} = useAppContext()

    //Main area where our app is rendered
    //SafeAreaProvider and a SafeAreaView should encapsule all the app, they provide automatic padding considering Notches or similar hardware/software obstructions to the UI. ONLY USE "style={GlobalStyles.appContainer}" HERE!!!
  return (

      <>
        {isInLogin ? <Login setIsInLogin={setIsInLogin}/> : <SignUp setIsInLogin={setIsInLogin}/>}
      </>

        
      
  );
}
