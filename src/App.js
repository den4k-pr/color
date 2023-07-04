import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    el_1: '#272727',
    el_2: '#535353',
    el_3: '#6b6b6b',
    el_4: '#828282',
    el_5: '#b3b3b3'
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const updatedFormData = { ...formData, [id]: value };
    setFormData(updatedFormData);
  };

  return (
    <section className='grid'>
      <div className='grid-el' style={{ backgroundColor: formData.el_1 }}>
        <input id='el_1' type='color' onChange={handleInputChange} />
        <p>{formData.el_1}</p>
      </div>
      <div className='grid-el' style={{ backgroundColor: formData.el_2 }}>
        <input id='el_2' type='color' onChange={handleInputChange} />
        <p>{formData.el_2}</p>
      </div>
      <div className='grid-el' style={{ backgroundColor: formData.el_3 }}>
        <input id='el_3' type='color' onChange={handleInputChange} />
        <p>{formData.el_3}</p>
      </div>
      <div className='grid-el' style={{ backgroundColor: formData.el_4 }}>
        <input id='el_4' type='color' onChange={handleInputChange} />
        <p>{formData.el_4}</p>
      </div>
      <div className='grid-el' style={{ backgroundColor: formData.el_5 }}>
        <input id='el_5' type='color' onChange={handleInputChange} />
        <p>{formData.el_5}</p>
      </div>
    </section>
  );
}

export default App;
