import BaseLayout from "../layout/BaseLayout"

const Thunderstorms = () => {
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
          src={`https://esri-rw.maps.arcgis.com/apps/dashboards/67a4bac50c834e1689a39304eff26138`}
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        ></iframe>
        </div>
        </div>
        </BaseLayout>
    )
}

export default Thunderstorms