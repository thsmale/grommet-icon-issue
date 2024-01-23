import { useState } from 'react';
import { Grommet, TextInput } from 'grommet';
import { View } from 'grommet-icons';

function App() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Grommet>
      <TextInput
        placeholder="Password"
        type={showPassword ? "text" : "password"}
        icon={<View onClick={() => {
          console.log('icon in TextInput clicked');
          setShowPassword(!showPassword);
        }}/>}
        reverse={true}
      />
    </Grommet>
  );
}

export default App;
