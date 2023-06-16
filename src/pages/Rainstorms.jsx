import BaseLayout from "../layout/BaseLayout"

const Rainstorms = () => {
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
          src={`https://esri-rw.maps.arcgis.com/apps/dashboards/4699fa196b9440b88b2984d058c0fe71`}
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        ></iframe>
        </div>
        </div>
        </BaseLayout>
    )
}

export default Rainstorms