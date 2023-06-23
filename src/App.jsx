import { RouterPag } from "./Components/Routers/Routers";

import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import GlobalContextProvider from "./Context/GlobalContext";

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
    <GlobalContextProvider>
      <ChakraBaseProvider theme={theme}>
        <RouterPag />
      </ChakraBaseProvider>
    </GlobalContextProvider>
  );
}

export default App;
