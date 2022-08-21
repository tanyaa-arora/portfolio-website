import { useState } from 'react';
import Cards from './Cards';
import Header from './Header';
import Footer from './Footer';
function App() {

  const [toggle, setToggle] = useState(true)


  function handleClick() {
    setToggle(!toggle)
  }

  return (
    <div className={'main-component flex flex-col justify-center bg-origin-border ' + (toggle ? 'bg-[#F1FAEE]' : 'bg-[#0E0E0E]')}>
      <Header toggle={toggle} />
      <div className='flex lg:flex-row flex-col items-center justify-center'>
        <Cards
          title="About me"
          content="I am an undergrad student. While I am still exploring career options, I am currently into web-development.
          In the mean time, I love doing co-curriculars such as dance and sing.
          I am always up for oppurtunities where I can learn and get better at what I do.
          I believe smart-work is as important as hardwork and that learning should never stop."
          toggle={toggle}
        />
        <Cards
          title="My skills"
          content={<ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Vanilla JS</li>
            <li>REACT JS</li>
            <li>C</li>
            <li>JAVA</li>
            <li>Python</li>
          </ul>}
          toggle={toggle}
        />
        <Cards
          title="Education"
          content={<ul>
            <li>XIIth graduation from Sunbeam English School Bhagwanpur, Varanasi</li>
            <li>Percentage-95.2%</li>
            <br></br>
            <li>B.Tech 2nd year from Ramaiah Institute of Technology</li>
            <li>CGPA- 8.7</li>
          </ul>}
          toggle={toggle}
        />
      </div>
      <Footer toggle={toggle} func={handleClick} />
    </div>
  );
}

export default App;
