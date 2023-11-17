import Head from 'next/head';
import Conception from '../components/layout';
import {getEachInfo, getData} from '../lib/data';

export async function getStaticProps( {params} ){
  const itemData = await getData(params.id);
  return{
    props:{
      itemData
    }
  };
}

export async function getStaticPaths(){
 const paths = await getEachInfo();
  return{
    paths,
    fallback: false
    };
}

export default function Entry({itemData}){
  return(
      <Conception>
<article className="card col-6">
  <div className="card-body">
    <h5 className="card-title">{itemData.name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{itemData.age}</h6>
    <p className="card-text">{itemData.profession}</p>
  </div>
</article>
      </Conception>
  );
}  