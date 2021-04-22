export default {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 200,
            },
        },
        {
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "category" }],
        },
        {
            name: "client",
            title: "Client",
            type: "string",
        },
        {
            name: "link",
            title: "Link",
            type: "url",
            description: "Enter a link to the external website",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "tools",
            title: "Tools",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "tool" }],
                },
            ],
        },
    ],
};
