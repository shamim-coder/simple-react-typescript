import React from "react";
import "./App.css";

function App() {
    const student = ["shamim", 55, "shobuj"];

    interface Person {
        name: string;
        age?: number;
        isActive: boolean;
        isEmployed?: string | boolean;
    }

    const user: Person = {
        name: "Shamim Reza",
        age: 25,
        isActive: false,
    };

    return (
        <div className="App">
            <header className="App-header">
                
                <h4>Name: {user.name}</h4>
                <h5>Age: {user?.age}</h5>
                <h5>Status: {user.isActive ? "Active" : "Inactive"}</h5>
            </header>
        </div>
    );
}

export default App;
