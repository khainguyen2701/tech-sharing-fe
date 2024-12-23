import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className='mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg'>
      <div className='shrink-0'>
        <img className='size-12' src='/img/logo.svg' alt='ChitChat Logo' />
      </div>
      <div>
        <div className='text-xl font-medium text-black'>ChitChat</div>
        <p className='text-slate-500'>You have a new message!</p>
      </div>
    </div>
    <ReactQueryDevtools initialIsOpen={true}  />
    </QueryClientProvider>
    
  );
}

export default App;
