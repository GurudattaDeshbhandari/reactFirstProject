import CoreConcept from './components/CoreConcept.jsx';
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton.jsx';
import { CORE_CONCEPTS } from './data.js';
import { useState } from 'react';
import { EXAMPLES } from './data.js';


function App() {
  const [selectedTopic, setSelectedTopic] =useState();
  function onSelectTab(selectedTab){
    setSelectedTopic(selectedTab)
  }
let tabContent = <p>Please Select a Topic</p>
if(selectedTopic){
  tabContent = (
          <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
  )
}
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>

            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
            
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={()=>onSelectTab('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={()=>onSelectTab('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={()=>onSelectTab('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={()=>onSelectTab('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
