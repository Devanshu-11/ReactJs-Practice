import DevButton from './DevButton.js';
import Hi from './Hi.js';
import Random from './Random.js';

function App(){
  return(
    <div>
      <h1>This is best course</h1>
      <DevButton></DevButton>
      <Hi></Hi>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>

      <button type="button" class="btn btn-primary">Primary</button>
      <br/>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <br/>
      <button type="button" class="btn btn-success">Success</button>
      <br/>
      <button type="button" class="btn btn-danger">Danger</button>
    </div>
  )
}

export default App;