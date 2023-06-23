import { RouterPag } from "./Components/Routers/Routers";

import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgColor: "#5E5E5E",
      },
    },
  },
});
function App() {
  return (
    <>
      <ChakraBaseProvider theme={theme}>
        <RouterPag />
      </ChakraBaseProvider>
    </>
  );
}

export default App;
