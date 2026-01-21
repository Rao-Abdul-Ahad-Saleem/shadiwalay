"use client";

import {useEffect} from "react";

export default function ElementRegistrar(){

    useEffect(() => {
        // This imports and registers the custom elements in hte browser
        import("@tailwindplus/elements").catch(err => console.error("Failed to load @tailwindplus/elements ", err));
    }, []);

    return null; // This component does not render anything UI-wise
    
}   