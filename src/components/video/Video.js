import React ,{ useState, useEffect }from "react";


function Video() {

  const [videosData,setVideos] = useState([])

 useEffect(() => {
  fetch("videosData.json")
    .then(response => response.json())
    .then(data => setVideos(data))
    .catch(error => console.error("Problem with fetching data!!",error))
 },[])
  
  
  
  return (
    <div>
        <div className='container'>
            <div className='row'>
                {
                    videosData.map((video,key) => (
                      <div key={key} className='col-md-4 mb-3'>
                        <a href={`https://youtube.com/watch?v=${video.img_id}`}>
                            <div className="card">
                                <img src={`https://img.youtube.com/vi/${video.img_id}/0.jpg`} 
                            
                                alt={video.title} />
                                <div className='card-body'>
                                    <h4 className='card-title'>{video.title}</h4>
                                    <p className='card-text'>{video.channelName}</p>
                                    <p className='card-text'>{video.viewsCount} views - {video.duration}</p>
                            </div>
                        </div>
                        </a>
                    </div>
                
            
                 ))
            }
        </div>
     </div>
     </div>
  )
  
}
export default Video;
