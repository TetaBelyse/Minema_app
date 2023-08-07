import BaseLayout from "../layout/BaseLayout"

const Hailstorms = () => {
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
          src={`https://esri-rw.maps.arcgis.com/apps/dashboards/078f6ea05f3a448db8872844a8bbed7e`}
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        ></iframe>
        </div>
        </div>
        </BaseLayout>
  )
}

export default Hailstorms
