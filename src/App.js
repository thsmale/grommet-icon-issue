import { useState } from 'react';
import { Grommet, Text, TextInput } from 'grommet';
import { View } from 'grommet-icons';

function App() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Grommet>
      <Text>When pressing the grommet View icon I would like to show the text in the Password input field</Text>
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
