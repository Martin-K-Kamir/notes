import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import BookList from "../components/BookList.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree />}>
            <ComponentPreview path="/App">
                <App />
            </ComponentPreview>
            <ComponentPreview path="/BookList">
                <BookList />
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;
