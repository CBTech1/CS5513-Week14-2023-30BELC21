import Head from 'next/head';
import Link from 'next/link';
import Conception from '../components/layout';
import { getSortedList } from '../lib/data';
import { getSortedthirdcustomList } from '../lib/data-thirdcustom';
import { newStuff } from '../libdeux/dataTwo';

export async function getStaticProps() {
  const AllMaterial = await getSortedList();
  const AllthirdCustom = await getSortedthirdcustomList();
  const AllMaterialTwo = newStuff();
  return {
    props: { AllMaterial, AllMaterialTwo,AllthirdCustom },
    revalidate: 60
  }
}


export default function House({ AllMaterialTwo, AllMaterial, AllthirdCustom }) {
  return (
    <Conception house>
      <strong> <p>salut mon amie, cest next.js ici. </p></strong>
      <h1> Some professions from different JS file but</h1>
      <h1> using the same json file with new bootstrap classname</h1>
      <div className="navbar navbar-light bg-light">
        {AllMaterialTwo.map(
          ({ id, name }) => (
            <Link key={id} href={`/${id}`} className="navbar-brand">
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
          ({ id, name }) => (
            <Link key={id} href={`/${id}`} className="list-group-item list-group-item-action list-group-item-dark">
              {name}
            </Link>
          )
        )
        }
      </div>
      <h1> Third custom field & post type</h1>
      <div className="navbar navbar-light bg-light">
        {AllthirdCustom.map(
          ({ id, name }) => (
            <Link key={id} href={`/${id}`} className="navbar-brand">
              {name}
            </Link>
          )
        )
        }
      </div>
    </Conception>
  );
}


