const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
const audioClips = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      color: '#a186f2',
      size:'scale(1)',
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      size:'scale(1)',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      color: '#ba69ee'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      size:'scale(1)',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      color: '#f57edc'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      size:'scale(1)',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      color: '#7fd9ae'
    },
    {
      keyCode: 83,
      size:'scale(1)',
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      color: '#70ddf7'
    },
    {
      keyCode: 68,
      size:'scale(1)',
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      color: '#54a6fa'
    },
    {
      keyCode: 90,
      size:'scale(1)',
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      color: '#fcde42'
    },
    {
      keyCode: 88,
      size:'scale(1)',
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      color: '#d0e55f'
    },
    {
      keyCode: 67,
      size:'scale(1)',
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      color: '#69d71a'
    }
  ];
function App()
{
  const [recording, setRecording] = React.useState("Drum Machine")

  return(
    <main id="drum-machine">
      <a href="https://github.com/abdulrcs" target="_blank" class="header"><i class="fab fa-2x fa-github"></i>github.com/abdulrcs</a>
      <div id="display">
      {audioClips.map( (clip) => (
          <Pad key={clip.id} clip={clip} setRecording={setRecording}/>
      ))}
      <div class="played">
        <h3>{recording}</h3>
      </div>
      </div>
    </main>
  )
}
function Pad({clip, setRecording})
{
  const [size, setSize] = React.useState("scale(1)")

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress)
    return () => {
    document.removeEventListener("keydown", handleKeyPress)
    }
  })

  const handleKeyPress = (e) =>
  {
    if(e.keyCode == clip.keyCode)
    {
      handleChange()
    }
  }

  const handleChange = () => 
  {
      const audioTag = document.getElementById(clip.keyTrigger)
      audioTag.currentTime = 0
      audioTag.play()
      setRecording(prev => clip.id)
      setSize(prev => 'scale(0.97)')
      sleep(100).then(() => {
        setSize(prev => 'scale(1)')

      })
  };

  return (
  <div className="drum-pad" id={clip.keyCode} onClick={handleChange} style={{background:"radial-gradient(#ffffff, "+clip.color+")",transform:size,fontSize:"2.5vw"}}>
    <div className="btn">{clip.keyTrigger}</div>
    <audio preload="true" src={clip.url} type="audio/mp3" id={clip.keyTrigger} className="clip"/>
  </div>
  )
}
ReactDOM.render(<App/>, document.getElementById("root"));