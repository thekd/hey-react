import './App.css';
import 'antd/dist/antd.css';
import { Card } from 'antd';
const { Meta } = Card;

function App() {
  return (
    <div className="App">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Cloud Home" description="https://khanhpham.cloud" />
      </Card>
    </div>
  );
}

export default App;
