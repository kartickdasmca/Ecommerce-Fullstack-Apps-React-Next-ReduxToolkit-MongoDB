
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import axios from 'axios'
export default function Home({error,country}) {
  if(error) return <p>Error: {error}</p>
  return (
    <div>   
      <Header country={country}/>
      <Footer country={country}/>
    </div>
  )
}

export async function getServerSideProps(){
  try{
    //const response = await axios.get(`https://api.ipregistry.co/?key=${process.env.REGISTRY_API_KEY}`)
   // const data = await response?.data?.location?.country;
   //console.log(data)
    return {
      props :{
         //country : {name : data?.name || null, flag : data?.flag?.emojitwo || null}
         country : {name : 'India' || null, flag : 'https://cdn.ipregistry.co/flags/emojitwo/in.svg' || null}
      }
    }
  }catch(err){
     return {
      props : {
        country : null,
        error : err.message || 'Failed to fetch API'
      }
     }
  }
  
}
