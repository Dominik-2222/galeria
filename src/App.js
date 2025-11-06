import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const image_gallery=[
  { id: "img_01", category: "natura",       src: "https://picsum.photos/seed/las/800/600",   likes: 120 },
  { id: "img_02", category: "architektura", src: "https://picsum.photos/seed/most/800/600",  likes: 85 },
  { id: "img_03", category: "ludzie",       src: "https://picsum.photos/seed/portret/800/600", likes: 250 },
  { id: "img_04", category: "technologia",  src: "https://picsum.photos/seed/uklady/800/600",  likes: 140 },
  { id: "img_05", category: "jedzenie",     src: "https://picsum.photos/seed/jedzenie/800/600", likes: 200 },
  { id: "img_06", category: "zwierzęta",    src: "https://picsum.photos/seed/lis/800/600",     likes: 320 },
  { id: "img_07", category: "sport",        src: "https://picsum.photos/seed/surfing/800/600", likes: 180 },
  { id: "img_08", category: "podróże",      src: "https://picsum.photos/seed/jezioro-gory/800/600", likes: 110 },
  { id: "img_09", category: "sztuka",       src: "https://picsum.photos/seed/rzezba/800/600",  likes: 95 },
  { id: "img_10", category: "noc",          src: "https://picsum.photos/seed/miasto-noca/800/600", likes: 150 },
];

const kategorie=[
{id:1,name: 'wszystkie'},
{id:2,name: 'architektura'},
{id:3,name: 'ludzie'},
{id:4,name: 'technologia'},
{id:5,name: 'jedzenie'},
{id:6,name: 'zwierzęta'},
{id:7,name: 'sport'},
{id:8,name: 'podróże'},
{id:9,name: 'sztuka'},
{id:10,name: 'noc'},
];
const [wybranakat,setwybranakat]=useState(kategorie[0].name)
const [image_gallery2,setimg]=useState(image_gallery)

const filterimg=image_gallery2.filter(value=>{
 if(wybranakat==='wszystkie'){
  return true;
 }
  return value.category===wybranakat;
 
});

const wybranakate=(e)=>{
  setwybranakat(e.target.value);

};
const polub=(e)=>{
  setimg(value=>value.map(img=>img.id === e ? { ...img, likes: img.likes+1}:img));
};

  return (
    <div >
      <h1>kategoria - {wybranakat}</h1>
      <h2>Galeria zdjęć</h2>
    
      <div><select value={wybranakat} onChange={wybranakate}>
        {kategorie.map(kat=>(<option key={kat.id} value={kat.name}>{kat.name}</option>))}
      </select></div>
      {filterimg.map(zdj=>(<div className='zdjecie' key={zdj.id}>
        <img src={zdj.src} alt={zdj.category}width="300" height="300"></img>
        <h5>{zdj.category}</h5><h5>{zdj.likes}</h5>
        <button onClick={() => polub(zdj.id)}>Polub</button>
        </div>
      ))}
    </div>
  );
}

export default App;
