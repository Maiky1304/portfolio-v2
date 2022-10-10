import SanityClient from "@sanity/client";

const sanity =  SanityClient({
    projectId: "cs0ny0fc",
    dataset: 'production',
    useCdn: true
});
export default sanity;