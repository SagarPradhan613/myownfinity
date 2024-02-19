import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'; // Import the path module

// Function to resolve relative paths
// eslint-disable-next-line no-undef
const resolvePath = (str) => path.resolve(__dirname, str);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Define your aliases here
      '../components': resolvePath('./src/components'), // Example alias for the components folder
      '../utils': resolvePath('./src/utils'), // Example alias for the utils folder
      '@pages': resolvePath('./src/pages'), // Example alias for the utils folder
      // Add more aliases as needed
    },
  },
})
