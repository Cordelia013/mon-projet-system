
import { GridProvider, Grid, GridOverlay, GridControl } from "./grid";

export default function App() {
  return (
    <GridProvider>
      <GridControl />
      <GridOverlay />
      <div className="">
        
        <Grid>
          <h1 className="text-2xl font-bold mb-4">Démo Grid System</h1>
          <div className="bg-blue-100 ">Col 1</div>
          <div className="bg-blue-200 p-4">Col 2</div>
          <div className="bg-blue-300 p-4">Col 3</div>
          <div className="bg-blue-400 p-4">Col 4</div>
        </Grid>
      </div>
    </GridProvider>
  );
}
