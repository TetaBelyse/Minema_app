import BaseLayout from "../layout/BaseLayout"

const Landslides = () => {
    return (
        <BaseLayout>
             <div>
        <div
        style={{ height: "95vh" }}
        className='col-span-1 overflow-scroll h-full'>
        <iframe
          title="Dashboard"
          width="100%"
          height="100%"
          allowFullScreen
          src={`https://esri-rw.maps.arcgis.com/apps/dashboards/03fc2b68d855483a83b7db1218df5e64`}
        ></iframe>
        </div>
        </div>
            
        </BaseLayout>
    )
}

export default Landslides
