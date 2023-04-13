import { defineConfig }from'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: "vb34kuwz",
    dataset: "production",
    title: "OMP Wiki",
    apiVersion: '2023-04-12',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: {types:schemas}
});

export default config;