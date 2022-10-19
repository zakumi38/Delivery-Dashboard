// Utils
import type {NextPage} from "next"
import axios, {AxiosResponse} from "axios"
// Component and Styles
import DataTable from "components/data-table"
// Types
import type {Rider} from "types/data.types"
import type {HomePageProps} from "types/home-page-props.types"
import Layout from "../components/Layout/Layout";

const Home: NextPage<HomePageProps> = ({riders}) => {
    console.log(riders)
    return (
        <Layout name="Cat is Cool">
            <DataTable
                headerData={riders!.length ? Object.keys(riders![0]) : []}
                bodyData={{riders}}
            />
        </Layout>
    )
}

export async function getStaticProps() {
    const response: AxiosResponse = await axios.get(
        "http://localhost:3001/riders"
    )
    const data: Rider[] = Object.values(response.data)
    return {
        props: {riders: [...data]},
    }
}

export default Home
