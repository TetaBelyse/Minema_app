import BaseLayout from "../layout/BaseLayout"

const Desinventor = () => {
  return (
    <BaseLayout>
        <div>
        <div
        style={{ height: "100vh" }}
        className='col-span-1 overflow-scroll h-full'>
        <iframe
          title="Dashboard"
          width="100%"
          height="100%"
          allowFullScreen
          src={`https://esri-rw.maps.arcgis.com/apps/dashboards/11eafd200f994288934a523c41e4ceaa`}
        ></iframe>
        </div>
        </div>
    </BaseLayout>
  )
}

export default Desinventor
