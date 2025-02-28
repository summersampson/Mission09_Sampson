import './App.css'

const listNames = [
  {name: "Zak", fact: "is nice, cute mustache, etc.", cute: 100},
  {name: "Nicole", fact: "very precious girl", cute: 101},
  {name: "Kitty", fact: "sweetest and smartest", cute: 101},
  {name: "floatsy", fact: "very cute and silly", cute: 101}
]

function WelcomeToThePage() {
  return <h1>this is no crime</h1>
}

function Person({name, fact, cute}: {name: string, fact: string, cute: number}) {

  return (
    <>
      <img />
      <h2>{name}</h2>
      <h3>Fun Facts: {fact}</h3>
      <h3>How cute are they?{cute}</h3>
    </>
  )
}

function NameList(){
  
  return (
    <>
      {
        listNames.map((singlePerson) => (
          <Person {...singlePerson} />
        ))
      }
      <Person {...listNames[0]}/>
      <Person {...listNames[1]}/>
      <Person {...listNames[2]}/>
      <Person {...listNames[3]}/>
    </>
  );
}

function App() {

  return (
    <>
      <WelcomeToThePage />
      <NameList />
    </>
  )
}

export default App
