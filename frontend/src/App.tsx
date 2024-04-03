import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Register from '@pages/Register';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Register/>
    </QueryClientProvider>
  );
}

export default App;
