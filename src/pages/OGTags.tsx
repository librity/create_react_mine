const OGTags = () => {
  return (
    <>
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://create-react-mine.vercel.app/" />
      <meta property="og:site_name" content="Create React Mine!" />

      <meta name="title" property="og:title" content="Create React Mine!" />
      <meta
        name="description"
        property="og:description"
        content="A blockchain and Proof of Work mining simulator made with NextJS and Typescript."
      />

      <meta
        name="image"
        property="og:image"
        content="https://create-react-mine.vercel.app/preview.png"
      />
      <meta property="og:image:width" content="2000" />
      <meta property="og:image:height" content="1600" />

      <meta name="author" content="@librity" />
    </>
  )
}

export default OGTags
