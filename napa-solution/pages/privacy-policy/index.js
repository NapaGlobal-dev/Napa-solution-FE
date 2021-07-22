import Banner from "../../components/privacyPolicy/Banner"
import PrivacyPolicy from "../../components/privacyPolicy/PrivacyPolicy"
import Breadcrumb from "../../components/layout/breadcrumb"

import { GET_PRIVACYPOLICY } from "../../query/general"
import { useQuery } from "@apollo/client";

import Head from "next/head"

export default function Index(){
  const {data, loading, error} = useQuery(GET_PRIVACYPOLICY)
  const listBreadcrumb = []
  if(data?.privacyPolicy?.length){
    listBreadcrumb.push({
      url: data.privacyPolicy[0].url,
      pageName: data.privacyPolicy[0].name
    })
  }
  return(
    <>
      <Head>
        {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" /> */}
        <link rel="stylesheet" href="./css/common.css" />
        <link rel="stylesheet" href="./css/operation-management.css" />
        <link rel="stylesheet" href="./css/privacy-policy.css" />
        <script src="./js/common/jquery-3.4.1.slim.min.js"></script>
        <script src="./js/common/popper.min.js"></script>
        <script src="./js/common/bootstrap.min.js"></script>
      </Head>
      <Banner data={data}/>
      <Breadcrumb listBreadcrumb={listBreadcrumb}/>
      <PrivacyPolicy data={data}/>
    </>
  )
}