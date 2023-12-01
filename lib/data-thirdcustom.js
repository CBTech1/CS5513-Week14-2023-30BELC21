//import fs from 'fs';
//import path from 'path';
//const dataRoute = path.join( process.cwd(), 'data' );

import got from 'got';

const dataURL = "https://dev-cs-55-13-cb.pantheonsite.io/wp-json/twentytwentyone-child/v1/hello";

export async function getEachInfo() {
  //const InfoRoute = path.join(dataRoute, 'persons.json');
  //const JsonChaine = fs.readFileSync(InfoRoute, 'utf8');
  let JsonChaine;
  try {
    JsonChaine = await got(dataURL);
   // console.log(JsonChaine.body);
  } catch (error) {
    JsonChaine.body = [];
    console.log(error);
  }
  //const JsonTing = JSON.parse(JsonChaine);
  const JsonTing = JSON.parse(JsonChaine.body);

  return JsonTing.map(function (item) {
    return {
      params: {
        id: item.ID.toString()
      }
    };
  });
}

export async function getSortedthirdcustomList() {
  //const InfoRoute = path.join(dataRoute, 'persons.json');
  //const JsonChaine = fs.readFileSync(InfoRoute, 'utf8');
  let JsonChaine;
  try {
    JsonChaine = await got(dataURL);
    console.log(JsonChaine.body);
  } catch (error) {
    JsonChaine.body = [];
    console.log(error);
  }
  //const JsonTing = JSON.parse(JsonChaine);
const JsonTing = JSON.parse(JsonChaine.body);


  JsonTing.sort(function (a, b) {
    return a.post_title.localeCompare(b.post_title);
  });

  return JsonTing.map(function (item) {
    return {
      id: item.ID.toString(),
      name: item.post_title
    };
  });
}

export async function getData(idRequested) {
  let JsonChaine;
  try {
    JsonChaine = await got(dataURL);
    console.log(JsonChaine.body);
  } catch (error) {
    JsonChaine.body = [];
    console.log(error);
  }

  const JsonTing = JSON.parse(JsonChaine.body);
  const objMatch = JsonTing.filter(function (obj) {
    return obj.ID.toString() === idRequested;
  });
  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];
  } else {
    objReturned = {};
  }
  return objReturned;
}