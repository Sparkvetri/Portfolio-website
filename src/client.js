import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

 

 
export const client = sanityClient ({
    projectId : import.meta.env.VITE_REACT_APP_PROJECT_ID,
    dataset:"production",
    apiVersion:"2024-04-24",
    useCdn:true,
    token : import.meta.env.VITE_REACT_APP_TOKEN,
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);