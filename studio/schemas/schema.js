// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import project from "./project";
import tool from "./tool";
import profile from "./profile";
import category from "./category";
import toolCategory from "./toolCategory";
import post from "./post";
import blogCategory from "./blogCategory";
import mainImage from "./mainImage";
import excerptPortableText from "./excerptPortableText";
import bodyPortableText from "./bodyPortableText";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: "default",
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        // Schemas go here:
        project,
        tool,
        profile,
        category,
        toolCategory,
        post,
        blogCategory,
        mainImage,
        excerptPortableText,
        bodyPortableText,
    ]),
});
