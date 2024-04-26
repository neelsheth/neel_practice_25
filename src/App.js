import logo from './logo.svg';
import './App.css';
import Test from './Component/Test'
import Child from './Component/Child'

function App() {

  const data = [
    {
      name: "Parent 1",
      children: [
        { name: "Child 1-1", 
        children: [{ name: "Grandchild 1-1-1" ,children: [{ name: "Grandchild 1-1-1-1" }]}, { name: "Grandchild 1-1-2" }] 
        },
        { name: "Child 1-2" },
        { name: "Child 1-3", children: [{ name: "Grandchild 1-3-1" }] }
      ]
    },
    {
      name: "Parent 2",
      children: []
    },
    {
      name: "Parent 3",
      children: [
        { name: "Child 3-1", children: [{ name: "Grandchild 3-1-1" }, { name: "Grandchild 3-1-2" }] },
        { name: "Child 3-2" }
      ]
    },
    {
      name: "Parent 4",
      children: [
        { name: "Child 4-1" },
        { name: "Child 4-2", children: [{ name: "Grandchild 4-2-1" }] },
        { name: "Child 4-3" }
      ]
    }
  ];
  
  // console.log(data);

  
  return (
    <div style={{margin:'20px'}}>
      {data && data.map((idx)=>(

        <>
     
          <Child name={idx.name} child={idx.children} space={30}></Child>
        </>
      ))}
    </div>
  );
}

export default App;
