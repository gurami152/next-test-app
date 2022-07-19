import Head from "next/head";

// meta components

const Meta = ({title, description}) => {
    return <Head>
        <title>{title}</title>
        <meta name={description} content={description}/>
    </Head>
}

export default Meta
