import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useQuery } from '@apollo/client'
import { GET_NEWS } from '../query/general'


export default function Home() {
  const {  data, loading, error } = useQuery(GET_NEWS,{});
  //!loading && !error
  return (
    <div className={styles.container}>
      {!loading && !error && data.allNews.map((item, key) => (
        <div>
          <div> {item.name} </div>
          <div> {item.title} </div>
        </div>
      ))}
    </div>
  )
}

