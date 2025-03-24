import Profile from "../../pages/Profile";
import { useAppContext } from "../../context/AppContext";


export default function ProfileApp(){
   const {activeWorkDay, setActiveWorkDay} = useAppContext()

   return(
      <Profile/>
   )
}