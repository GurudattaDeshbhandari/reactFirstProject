import CoreConcept from './components/CoreConcept.jsx';
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton.jsx';
import { CORE_CONCEPTS } from './data.js';
import { useState } from 'react';
import { EXAMPLES } from './data.js';


function App() {
  const [selectedTopic, setSelectedTopic] =useState("components");
  function onSelectTab(selectedTab){
    setSelectedTopic(selectedTab)
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=>onSelectTab('components')}>Components</TabButton>
            <TabButton onSelect={()=>onSelectTab('jsx')}>JSX</TabButton>
            <TabButton onSelect={()=>onSelectTab('props')}>Props</TabButton>
            <TabButton onSelect={()=>onSelectTab('state')}>State</TabButton>
          </menu>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </section>
      </main>
    </div>
  );
}

export default App;
