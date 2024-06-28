import { useEffect, useState } from "react";
import React from "react";

function Categories() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://run.mocky.io/v3/ccd946aa-f3c8-47a8-acff-3928593ea10d").then(
            (res) => {
                return res.json();
            }
        ).then((res) => {
            console.log(res);
            setCategories(res);
        })
    },[])
    return (<div>
        {categories.map((item)=> {
            return(
            <div key={item.id}>{item.name}</div>)
        })}
    </div>)
}

export default Categories;