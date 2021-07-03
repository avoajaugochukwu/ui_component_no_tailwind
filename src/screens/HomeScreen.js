import Box from '../components/Box'
import Nav from '../components/Nav'


function HomeScreen() {
  return (
    <>
      <Nav />
      <div className="container mx-auto">
        <div className="px-10 mx-10">
          <div className="text-center my-10">
            <h1 className="text-4xl">Figma to React - Pixel perfect</h1>
            <p className="text-xl">Click on the figma icon to open the figma file and react page for the design</p>
          </div>
          <div className="flex px-10 mx-10 flex-wrap">

            <Box bgColor={true} header={'Tralfagar virtual healthcare'} month={'JUN'} day={29} url={'Trafalgar'} timeTaken={'4 hours'}
              figmaLink="https://www.figma.com/file/EWmzcVkd7qbP5Nf7iMvuqP/Trafalgar-Landing-Page" />

            {/* <Box bgColor={false} />
          <Box bgColor={true} /> */}

            {/* <Box bgColor={false} header={'Tralfagar virtual healthcare'} month={'JUN'} day={4} />
          <Box bgColor={true} />
          <Box bgColor={false} /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeScreen