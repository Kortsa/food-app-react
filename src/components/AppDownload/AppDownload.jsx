import './AppDowload.css'
import {assets} from "../../assets/assets"

function AppDownload() {

  return (
    <div className='app-download' id='app-download'>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias officiis quis ipsum consectetur. Quas?
        </p>
        <div className='app-download-platforms'>
            <img src={assets.play_store} alt="" />
            <img src={assets.play_store} alt="" />
        </div>

    </div>
  )
}
export default AppDownload;