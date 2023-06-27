import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { ReactNode } from 'react';

// Create a client
const queryClient = new QueryClient();
type Props = {
  children: ReactNode;
};
const ReactQueryProvider = ({ children }: Props) => {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
export default ReactQueryProvider;
