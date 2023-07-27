import './App.css';
import Spline from '@splinetool/react-spline';

function App() {

  const splineelementhitted = () => {
    alert("You Have Hitted Spline Element");
  }


  return (
    <div>
      <p>Hello I am trying Different Things with Spline 3D Viewer Right Now</p>
      <p>Hello I am trying Different Things with Spline 3D Viewer Right Now</p>

      <div style={{ width: "fit-content", height: "fit-content", border: "3px solid red", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <p style={{ marginTop: "auto", marginBottom: "auto", }}>Happy Emoji</p>
        {/* <Spline scene="https://prod.spline.design/AysuDeBKBgSxAXhJ/scene.splinecode"  />
      */}
        {/* <Spline scene="https://prod.spline.design/ghf7otcM04Sv7LCS/scene.splinecode" />
           */}
        <Spline scene="https://prod.spline.design/ghf7otcM04Sv7LCS/scene.splinecode" onClick={splineelementhitted}/>
        {/* <Spline scene="https://prod.spline.design/MqFaI9NSXQFc4toX/scene.splinecode" /> */}

      </div>

    </div>
  );
}

export default App;
