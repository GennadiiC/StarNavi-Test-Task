
import Grid from './Grid';
import Display from './Display';

export default function Field ({ field })  {
  return (
    <div className="field-container">
      <Grid 
        field={field} 
      />
      <Display />
    </div>
  );
}
