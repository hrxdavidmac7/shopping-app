import { useFetchData } from "./fetch-data-hook";

export function Hookdemo() {
    let categories = useFetchData("https://fakestoreapi.com/products/categories");

    // Add a null check before mapping over categories
    if (!categories) {
        return <div>Loading...</div>; // or some other loading indicator
    }

    return (
        <div className="container-fluid">
            <ol>
                {categories.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ol>
        </div>
    );
}
