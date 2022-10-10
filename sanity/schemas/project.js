export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'thumbnail',
            type: 'image',
            title: 'Thumbnail'
        },
        {
            name: 'links',
            type: 'array',
            title: 'Links',
            of: [{type: 'string'}]
        }
    ]
}