import logo from './logo.svg';
import './App.css';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import { MyDocument } from './components/react-pdf';
import { useState } from 'react';
function App() {
  const [showBody, setShowBody] = useState(false)
  return (
    <div className="App">
      <PDFViewer>

        <MyDocument showBody={showBody} />
      </PDFViewer>
      <PDFDownloadLink document={<MyDocument showBody={showBody} />} fileName="my-exported-pdf.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
      <button onClick={() => setShowBody(!showBody)}>Toggle Body Visibility</button>
    </div>
  );
}

export default App;
