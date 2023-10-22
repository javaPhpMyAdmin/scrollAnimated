import { Scroll, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import './Animation.css'

const Section = (props) => {
  return (
    <section
      style={{opacity: props.opacity, display:'flex', flexDirection:'column', justifyContent:'center', padding:'40px', alignItems: props.right ? 'flex-end' : 'flex-start', height:'100vh'}}
   > 
      <div style={{width:'50%', display:'flex',justifyContent:'center', alignItems:'center'}}>
        <div style={{width:'100%', maxWidth:'384px'}}>
          <div style={{background:'white', borderRadius:'20px', padding : '20px'}}>
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = ()=>{
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

    return(
     <Scroll html>
        <div style={{width:'100vw'}}>
        <Section opacity={opacityFirstSection}>
          <h1 className="wobble" style={{fontWeight:'bold', fontSize:'24px', lineHeight:'32px', fontFamily:'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'}}>
            Hello, I'm Marcelo
          </h1>
          <p style={{color:'gray'}}>Welcome to my portfolio</p>
          <p style={{marginTop:'12px'}}>I know:</p>
          <ul style={{lineHeight:'2.25rem'}}>
            <li>🧑‍💻 How to code</li>
            <li>🧑‍🏫 How to learn</li>
            <li>📦 How to deliver</li>
          </ul>
          <p className="animated">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="text-right" style={{fontWeight:'bold', fontSize:'24px', lineHeight:'32px', fontFamily:'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'}}>
            Here are my skillsets 🔥
          </h1>
          <p style={{color:'rgb(107 114 128)'}}>PS: I never test</p>
          <p style={{marginTop:'12px'}}>
            <b>Frontend 🚀</b>
          </p>
          <ul style={{lineHeight:'32px'}}>
            <li>ReactJS</li>
            <li>React Native</li>
            <li>VueJS</li>
            <li>Tailwind</li>
          </ul>
          <p style={{marginTop:'12px'}}>
            <b>Backend 🔬</b>
          </p>
          <ul style={{lineHeight:'32px'}}>
            <li>NodeJS</li>
            <li>tRPC</li>
            <li>NestJS</li>
            <li>PostgreSQL</li>
          </ul>
          <p className="animated">↓</p>
        </Section>
        <Section  opacity={opacityLastSection}>
          <h1 className="pulse"style={{fontWeight:'bold', fontSize:'24px', lineHeight:'32px', fontFamily:'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'}}>
            🤙 Email me maybe?
          </h1>
          <p style={{color:'gray'}}>
            I'm very expensive but you won't regret it, just kidding
          </p>
          <p  style={{marginTop: '24px', padding: '12px', background:'rgb(226 232 240)', borderRadius:'8px'}}>
            📧  chelobat16411@gmail.com
          </p>
        </Section>
      </div>
    </Scroll>
    )
}