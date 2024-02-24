/** @type {import('tailwindcss').Config} */
module.exports = {
        content: [
                "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
                "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
                "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
                // "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
                extend: {
                        backgroundImage: {
                                "gradient-radial":
                                        "radial-gradient(var(--tw-gradient-stops))",
                                "gradient-conic":
                                        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                                hero: "url('imgs/2.jpg')",
                                hero1: "url('imgs/1.jpg')",
                        },
                        colors: {
                                yel: "#bcb33d",
                                wh: "rgba(255, 255, 255, 0.354)",
                                kr: "#f3f3f3",
                                gr: "#ededed",
                                gri: "#e7f0ee",
                                gri1: "#eaeaea",
                                mai: "#f6f6f6",
                        },
                        fontFamily: {
                                all1: "all",
                        },
                        boxShadow: {
                                ui: "0px 0px 23px -7px rgba(0,0,0,0.32)",
                        },
                },
        },
        
        plugins: [],
};
