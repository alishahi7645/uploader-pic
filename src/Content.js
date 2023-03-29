import Fileupload from './components/Fileupload';
import {Link} from 'react-router-dom'
function Content() {
  return (
    <div className='container mt-5'>
      <h2 className='text-center fw-bold'>
        آپلودر عکس
      </h2>
      <Fileupload/>

    </div>
    
  );
}

export default Content;