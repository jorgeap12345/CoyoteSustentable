import Dashboard from '../pages/Dashboard'; 
import { useAppContext } from "../context/AppContext";




export default function App() {


   const {isInLogin, setIsInLogin} = useAppContext()

    //Main area where our app is rendered
    //SafeAreaProvider and a SafeAreaView should encapsule all the app, they provide automatic padding considering Notches or similar hardware/software obstructions to the UI. ONLY USE "style={GlobalStyles.appContainer}" HERE!!!
  return (

      <>
        <Dashboard setIsInLogin={setIsInLogin}/>
      </>

        
      
  );
}