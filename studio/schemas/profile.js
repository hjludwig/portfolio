export default {
    name: "profile",
    title: "Profile",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "tagline",
            title: "Tagline",
            type: "string",
        },
        {
            name: "bio",
            title: "Bio",
            type: "text",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: [
                {
                    hotspot: true,
                },
            ],
        },
    ],
};
