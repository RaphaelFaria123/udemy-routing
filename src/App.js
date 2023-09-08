import Button from './Button';
import { GoBell } from 'react-icons/go';
import { BsCloudDownload } from 'react-icons/bs';
import { GoDatabase } from 'react-icons/go';

function App() {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Hello</h1>
      <div>
        <Button onClick={handleClick} primary><GoBell />Click here</Button>
      </div>
      <div>
        <Button secondary><BsCloudDownload />Click here</Button>
      </div>
      <div>
        <Button danger><GoDatabase />Click here</Button>
      </div>
      <div>
        <Button success>Click here</Button>
      </div>
      <div>
        <Button warning>Click here</Button>
      </div>
      <div>
        <Button>Click here</Button>
      </div>
      <div>
        <Button primary rounded>Click here</Button>
      </div>
      <div>
        <Button secondary rounded>Click here</Button>
      </div>
      <div>
        <Button danger rounded>Click here</Button>
      </div>
      <div>
        <Button success rounded>Click here</Button>
      </div>
      <div>
        <Button warning rounded>Click here</Button>
      </div>
      <div>
        <Button primary rounded outline>Click here</Button>
      </div>
      <div>
        <Button secondary rounded outline>Click here</Button>
      </div>
      <div>
        <Button danger rounded outline>Click here</Button>
      </div>
      <div>
        <Button success rounded outline>Click here</Button>
      </div>
      <div>
        <Button warning rounded outline>Click here</Button>
      </div>
    </div>
  );
}

export default App;
