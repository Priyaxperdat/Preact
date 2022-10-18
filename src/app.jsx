import { useState } from 'preact/hooks'
import closeLogo from './assets/close.png'
import './app.css'

export function App() {
  const [showText, setShowText] = useState(true);
  const close = () => {
    setShowText(false)
  }
  
  return (
    <>
      <div class="App">
      <h1 style={{display:'flex',alignItems:'center',justifyContent:'center',height:'calc(100vh - 270px)'}}>Preact Demo App</h1>
        {showText && 
        <div class="banner">
        <div style={{padding:'0 20px'}} class='banner-wrapper'>
          <div style={{display:'flex',justifyContent: 'flex-end',marginBottom: '20px'}}>
            <a style={{color:'black',display: 'flex',cursor:'pointer'}} onClick={close}>Rifiuta cookie non necessari  <span style={{paddingLeft:'10px'}}>✕ </span> </a>
          </div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{textAlign:'left'}}>
              <h2 style={{fontSize:'30px'}}>Questo sito web raccoglie alcuni dati personali dei visitatori e utenti</h2>
              <p>Con il tuo consenso, noi e i nostri partner utilizziamo i cookie e tecnologie simili per archiviare, accedere ed elaborare i dati personali come, ad esempio, la visita al sito web o la personalizzazione degli annunci. Poiché rispettiamo il tuo diritto alla privacy, è possibile scegliere di non consentire alcuni tipi di cookie. Clicca su preferenze GDPR per saperne di più.</p>
            </div>
            <div style={{paddingLeft:'50px'}}>
              <button class='primary' onClick={close}>Accept All</button>
              <button class='primary' onClick={close}>Accept Necessary Cookies</button>
            </div>
          </div>
        </div>
      </div>}
    </div>
    </>
  )
}
