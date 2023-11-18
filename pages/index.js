import Head from 'next/head';
import Link from 'next/link';
import Conception from '../components/layout';
import { getSortedList } from '../lib/data';
import { newStuff } from '../libdeux/dataTwo';

export async function getStaticProps(){
  const AllMaterial = await getSortedList();
  const AllMaterialTwo = newStuff();
      return{
    props:{AllMaterial,AllMaterialTwo}
  }
}


export default function House({AllMaterialTwo,AllMaterial}){
  return(
    <Conception house>
   <strong> <p>salut mon amie, cest next.js ici. </p></strong>
      <h1> Some professions from different JS file but</h1>
      <h1> using the same json file with new bootstrap classname</h1>
      <div className="navbar navbar-light bg-light">
        {AllMaterialTwo.map(
            ({id, name}) => (
             <Link key={id} href = {`/${id}`} className = "navbar-brand">
               {name}
             </Link>
            )
          )
        }
      </div>
      <br></br>
        <h1> Posts in my wordpress site displayed through got with WP REST API </h1>
      <div className="list-group">
        {AllMaterial.map(
            ({id, name}) => (
             <Link key={id} href = {`/${id}`} className = "list-group-item list-group-item-action list-group-item-dark">
               {name}
             </Link>
            )
          )
        }
      </div>
    </Conception>
  );
}


