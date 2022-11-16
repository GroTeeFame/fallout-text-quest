import './App.scss';

import { GameData } from './components/GameData';

function App() {

  return(
    <GameData/>
  )
}

export default App;








































// import { useEffect, useState, createContext, useContext } from 'react';

// import './App.scss';
 
// import { textNodes } from './textNodes';
// import { TextDisplay } from './components/TextDisplay';
// import { OptionDisplay } from './components/OptionDisplay';
// import { InventoryDisplay } from './components/InventoryDisplay';
// import { Player } from './components/Player';
// import { RadiationDisplay } from './components/RadiationDisplay';
// import { LocationDisplay } from './components/LocationDisplay';

// const stateContext = createContext();

// function App() {

//   const {inventory, setInventory, radiation, changeRadiation, stillAlive, radPerMove} = Player()

//   const [location, setLocation] = useState('');
//   const [showText, setShowText] = useState('');
//   const [showOptions, setShowOptions] = useState([]);


//   useEffect(() => {
//     startGame()
//   }, [])

//   console.log('%c RE-RENDER', 'color: red; font-size: 18px');

//   const startGame = () => {
//       console.log('Start game');
//       // <TextDisplay text={'#333.erase'}/>
//       setInventory({
//           plastic: false,
//           water: false,
//           antiseptic: false,
//           mushroom: false,
//           medicine: false,
//           radAway: false,
//       });
//       showTextNode(0);
//   }

//   const showTextNode = (textNodeIndex) => {
//       console.log('showTextNode');

//       setShowOptions([]);
//       const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
//       setShowText(textNode.text);
//       setLocation(textNode.location);
//       textNode.options.forEach(option => {
//           setShowOptions(showOptions => [...showOptions, option]);
//       })
//       console.log("ALIVE: ", stillAlive());
//       console.log("RAD LVL: ", radiation);
//       radPerMove(textNode.radiationLevel);
//   }


//   return (
//     <>
//       <div className='App'>FALLOUT QUEST</div>
//       <div className='App'>
//           <LocationDisplay location={location}/>
//       </div>
//       <br />
//       <TextDisplay text={showText} location={location}/>
//       <br />
//       {/* <LocationDisplay location={location}/> */}
//       <br />
//       <OptionDisplay options={showOptions} inventory={inventory} setInventory={setInventory} showTextNode={showTextNode}/>
//       {/* <button onClick={startGame}>START GAME</button> */}
//       <br />

//       <br />
//       <RadiationDisplay radiation={radiation}/>
//       <br />
//       <InventoryDisplay inventory={inventory}/>
//     </>
//   );
// }

// export default App;






















































// import { useEffect, useState } from 'react';
// import './App.scss';
 
// import { textNodes } from './textNodes';
// import { TextDisplay } from './components/TextDisplay';
// import { OptionDisplay } from './components/OptionDisplay';
// import { InventoryDisplay } from './components/InventoryDisplay';


// function App() {

//   const [inventory, setInventory] = useState({
//       plastic: false,
//       water: false,
//       antiseptic: false,
//       mushroom: false,
//       medicine: false,
//       radAway: false,
//   });

//   const [showText, setShowText] = useState('');
//   const [showOptions, setShowOptions] = useState([]);


//   useEffect(() => {
//     startGame()
//   }, [])

//   console.log('%c RE-RENDER', 'color: red; font-size: 18px');

//   const startGame = () => {
//       console.log('Start game');
//       // <TextDisplay text={'#333.erase'}/>
//       setInventory({
//           plastic: false,
//           water: false,
//           antiseptic: false,
//           mushroom: false,
//           medicine: false,
//           radAway: false,
//       });
//       showTextNode(0);
//   }

//   const showTextNode = (textNodeIndex) => {
//       console.log('showTextNode');

//       setShowOptions([]);
//       const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
//       setShowText(textNode.text);
//       textNode.options.forEach(option => {
//           setShowOptions(showOptions => [...showOptions, option]);
//       })
//   }

//   // const selectOption = (option) => {
//   //     const nextTextNodeId = option.nextText;
//   //     showTextNode(nextTextNodeId);
//   // }


//   // console.log('showText: ', showText);
//   // console.log('showOptions: ', showOptions);


//   return (
//     <>
//       <div className='App'>FALLOUT QUEST</div>
//       <br />
//       <TextDisplay text={showText}/>
//       <br />

//       <OptionDisplay options={showOptions} inventory={inventory} setInventory={setInventory} showTextNode={showTextNode}/>
//       {/* <button onClick={startGame}>START GAME</button> */}
//       <br />
//       <InventoryDisplay inventory={inventory}/>
//     </>
//   );
// }

// export default App;






























































// import { useEffect, useState } from 'react';
// import './App.scss';
 
// import { textNodes } from './textNodes';

// function App() {

//   const [inventory, setInventory] = useState({
//     plastic: false,
//     water: false,
//     antiseptic: false,
//     mushroom: false,
//     medicine: false,
//     radAway: false,
//   });

//   let showText = '';//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   let showOptions = [];//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//   useEffect(() => {
//     starGame()
//   }, [])

//   console.log('%c RE-RENDER', 'color: red; font-size: 18px');
//   // const [inventory, setInventory] = useState([]);

//   console.log('inventory: ');
//   console.log(inventory);

//   if (inventory) console.log(textNodes[0].options[0].visible(inventory));

//   if (inventory) console.log(textNodes[0].options[1].visible(inventory));

//   const takePlastic = () => {
//     if (inventory){
//       console.log('inventory: ');
//       console.log(inventory);
//       // console.log(textNodes);
//       console.log(textNodes[0].options[0].text);
//       console.log(textNodes[0].options[0].setInventory(inventory, setInventory));


//       console.log('Visible :  ', textNodes[0].options[0].visible(inventory));
//       console.log('inventory: ');
//       console.log(inventory);
//     }
//   }
//   const takeWater = () => {
//     if (inventory){
//       console.log(inventory);
//       console.log(textNodes);
//       console.log(textNodes[0].options[1].text);
//       console.log(textNodes[0].options[1].setInventory(inventory, setInventory));

//       console.log('Visible :  ', textNodes[0].options[1].visible(inventory));
//       console.log('inventory: ');
//       console.log(inventory);
//     }
//   }

//   const starGame = () => {
//       setInventory({
//         plastic: false,
//         water: false,
//         antiseptic: false,
//         mushroom: false,
//         medicine: false,
//         radAway: false,
//       }),
//       showTextNode(0);
//   }

//   const showTextNode = (textNodeIndex) => {
//       const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
//       showText = textNode.text;
//       showOptions = [];
//       textNode.options.forEach(option => {
//         if(option.visible){
//           showOptions.push(option.text)
//         }
//       })
//   }

//   const selectOption = (option) => {

//   }

//   return (
//     <>
//       <div className='App'>HELLO</div>
//       <div>{text}</div>
//       <button onClick={takeWater}>Take water</button>
//       <button onClick={takePlastic}>Take plastic</button>
//     </>
//   );
// }

// export default App;
