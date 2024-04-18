import "./App.css";

import { Button, Flex } from "antd";

function App() {
  return (
    <>
      <h1>Bus booking</h1>
      <Flex gap={20}>
        <Button type="primary">Book now</Button>
        <Button className="bg-black text-white ">Book now</Button>
        <Button className="bg-gray-100 text-black ">Book now</Button>
        <Button className="bg-gray-200 text-black ">Book now</Button>
        <Button className="bg-gray-300 text-black ">Book now</Button>
        <Button className="bg-gray-400 text-black ">Book now</Button>
        <Button className="bg-gray-500 text-white ">Book now</Button>
        <Button className="bg-gray-600 text-white ">Book now</Button>
        <Button className="bg-gray-700 text-white ">Book now</Button>
        <Button className="bg-gray-800 text-white ">Book now</Button>
        <Button className="bg-gray-900 text-white ">Book now</Button>
      </Flex>
    </>
  );
}

export default App;
