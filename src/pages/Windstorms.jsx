import BaseLayout from "../layout/BaseLayout"

const Windstorms = () => {
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
          src={`https://esri-rw.maps.arcgis.com/apps/dashboards/420c09ec3929468c93dc2a0312c1b7d0`}
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        ></iframe>
        </div>
        </div>
        </BaseLayout>
    )
}

export default Windstorms