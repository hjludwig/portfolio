export default {
    name: "tool",
    title: "Tools",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "toolCategory" }],
        },
    ],
};
