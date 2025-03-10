import Qrscanner from "../../pages/Qrscanner";
import { useAppContext } from "../../context/AppContext";


export default function QRScanner(){
   const {activeWorkDay, setActiveWorkDay} = useAppContext()

   return(
      <Qrscanner activeWorkDay={activeWorkDay} setWorkDayState={setActiveWorkDay}/>
   )
}